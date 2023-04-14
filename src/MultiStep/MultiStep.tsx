import { Box, Center, Image } from "@chakra-ui/react";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { FormButtonGroup } from "../components/FormButtonGroup";
import { ThankYouPage } from "../components/FormPages/ThankYouPage";
import { ProgressBarWithAnimatedImage } from "../components/ProgressBar/ProgeressBarWithAnimatedImage";
import { useFormValues } from "../components/hooks/useFormValues";
import { useProgress } from "../components/hooks/useProgress";
import { getForms } from "../components/utils/getForms";
import "./animations.css";
import { MergedFormDataType } from "../types/FormTypes";

export const Multistep = () => {
  const {
    step,
    progress,
    setProgress,
    isAnimating,
    handleBackClick,
    handleNextClick,
    slideDirection,
    thankyou,
    setThankyou,
  } = useProgress();
  const { formData, setFormData, formTextValue, setFormTextValue } =
    useFormValues();

  const forms = getForms(
    formData,
    setFormData,
    formTextValue,
    setFormTextValue
  );

  const { formState } = useForm({
    mode: "onChange",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setThankyou(true);
    const mergedFormData: any = Object.entries(formData).reduce(
      (accumulator, [key, value]) => {
        if (key !== "form8") {
          return {
            ...accumulator,
            [key]: {
              textValue: formTextValue[key] || "",
              points: value,
            },
          };
        }
        return accumulator;
      },
      {}
    );
    mergedFormData.marketing = mergedFormData.marketing.points;
    mergedFormData.privacy = mergedFormData.privacy.points;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const formResult: MergedFormDataType = mergedFormData; //form output

  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ overflowX: "clip" }}>
      <Center>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={"50rem"}
          p={4}
          mx="2rem"
          my="1rem"
          minW={["90vw", "90vw", "90vw", "50rem", "50rem"]}
        >
          <Image
            src="tods-logo.png"
            boxSize="fit-content"
            h="5rem"
            mb="1rem"
            display={"block"}
            ml={"auto"}
            mr={"auto"}
            alt="logo"
          />
          {thankyou === false ? (
            <>
              <ProgressBarWithAnimatedImage
                progress={progress}
                setProgress={setProgress}
              />
              <Box
                className={
                  isAnimating
                    ? ""
                    : slideDirection === "right"
                    ? "slide-in-right"
                    : "slide-in-left"
                }
                h={["fit-content", "fit-content", "60vh", "60vh", "60vh"]}
              >
                {forms.find((form) => form.key === step)?.component}
              </Box>
              <FormButtonGroup
                formData={formData}
                handleNextClick={handleNextClick}
                handleBackClick={handleBackClick}
                step={step}
                formState={formState}
              />
            </>
          ) : (
            <ThankYouPage />
          )}
        </Box>
      </Center>
    </form>
  );
};
