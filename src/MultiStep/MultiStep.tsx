import { Box, Center, HStack, Heading } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { FormButtonGroup } from "../components/FormButtonGroup";
import { ThankYouPage } from "../components/FormPages/ThankYouPage";
import { ProgressBarWithAnimatedImage } from "../components/ProgressBar/ProgeressBarWithAnimatedImage";
import { useFormValues } from "../components/hooks/useFormValues";
import { useProgress } from "../components/hooks/useProgress";
import { getForms } from "../components/utils/getForms";
import "./animations.css";
import { checkAnswers } from "../components/utils/checkAnswers";

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

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setThankyou(true);
    const mergedFormData: any = Object.entries(formData).reduce(
      (accumulator, [key, value]) => {
        // if (key !== "form8") {
        return {
          ...accumulator,
          [key]: {
            textValue: formTextValue[key] || "",
            points: value,
          },
        };
        // }
        // return accumulator;
      },
      {}
    );
    // mergedFormData.marketing = mergedFormData.marketing.points;
    // mergedFormData.privacy = mergedFormData.privacy.points;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const formResult: any = mergedFormData; //form output
    setCorrectAnswers(() => checkAnswers(formResult));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ overflowX: "clip",}}>
      <Center>
        <Box
          className="background-main"
          backgroundImage={"guantoni.png"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          backgroundBlendMode={"soft-light"}
          backgroundRepeat={"no-repeat"}
          backgroundColor={"#ffffff75"}
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          mx="4rem"
          minH={'100vh'}
          minW={'100vw'}
          display={"flex"}
          flexDirection={"column"}
          overflowY={"clip"} 
        >
          <HStack
            ml={"auto"}
            mr={"auto"}
            justifyContent={"space-evenly"}
            my="1rem"
          >
            {/* <Image
              src="fiocco.jpg"
              boxSize="fit-content"
              h={["3rem", "3rem", "4rem", "5rem", "6rem"]}
              display={"block"}
              alt="logo"
              borderRadius={"100%"}
            /> */}
            <Heading
              fontSize={{ sm: "2xl", md: "3xl" }}
              fontStyle={"italic"}
              color={"black"}
              textAlign={"center"}
              fontWeight={'1000'}
            >
              Quante ne sai sul tumore al seno?
            </Heading>
            {/* <Image
              src="fiocco.jpg"
              boxSize="fit-content"
              h={["3rem", "3rem", "4rem", "5rem", "6rem"]}
              display={"block"}
              alt="logo"
              borderRadius={"100%"}
            /> */}
          </HStack>

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
                paddingX='1.2rem' 
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
            <ThankYouPage correctAnswers={correctAnswers} />
          )}
        </Box>
      </Center>
    </form>
  );
};
