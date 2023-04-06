import { Box, Center, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormButtonGroup } from "./FormButtonGroup";
import { ThankYouPage } from "./FormPages/ThankYouPage";
import { ProgressBarWithAnimatedImage } from "./ProgressBar/ProgeressBarWithAnimatedImage";
import { useFormValues } from "./hooks/useFormValues";
import { getForms } from "./utils/getForms";

export const Multistep = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(12.5);
  const [thankyou, setThankyou] = useState(false);
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setThankyou(true);
    const mergedFormData = Object.entries(formData).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          textValue: formTextValue[key] || "",
          points: value,
        },
      }),
      {}
    );

    console.log(mergedFormData);
  };

  const handleClick = () => {
    setStep(step + 1);
    if (step === 8) {
      setProgress(100);
    } else {
      setProgress(progress + 12.5);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
              <Box className="form-container">
                {forms.find((form) => form.key === step)?.component}
              </Box>
              <FormButtonGroup
                formData={formData}
                handleClick={handleClick}
                progress={progress}
                setProgress={setProgress}
                setStep={setStep}
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
