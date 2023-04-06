import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { Form1 } from "./FormPages/Form1";
import { Form2 } from "./FormPages/Form2";
import { Form3 } from "./FormPages/Form3";
import { Privacy } from "./FormPages/Privacy";
import { ProgressBarWithAnimatedImage } from "./ProgressBar/ProgeressBarWithAnimatedImage";
import { ThankYouPage } from "./FormPages/ThankYouPage";

export const Multistep = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(12.5);
  const [thankyou, setThankyou] = useState(false);
  const [formData, setFormData] = useState({
    form1: "",
    form2: "",
    form3: "",
    form4: "",
    form5: "",
    form6: "",
    form7: "",
    form8: false,
  });

  const { formState } = useForm({
    mode: "onChange",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setThankyou(true);
  };

  const handleClick = () => {
    setStep(step + 1);
    if (step === 8) {
      setProgress(100);
    } else {
      setProgress(progress + 12.5);
    }
  };
  const isFormPageEmpty = (): boolean | undefined => {
    switch (step) {
      case 1:
        return formData.form1 === "";
      case 2:
        return formData.form2 === "";
      case 3:
        return formData.form3 === "";
      case 4:
        return formData.form4 === "";
      case 5:
        return formData.form5 === "";
      case 6:
        return formData.form6 === "";
      case 7:
        return formData.form7 === "";
      default:
        return true;
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

              {step === 1 ? (
                <Form1
                  key={1}
                  formNumber={"form1"}
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : step === 2 ? (
                <Form2
                  key={2}
                  formNumber={"form2"}
                  subtitle="VELOCITA' DI NAVIGAZIONE"
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : step === 3 ? (
                <Form2
                  key={3}
                  formNumber={"form3"}
                  subtitle="DESCRIZIONI ED IMMAGINI PRODOTTO"
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : step === 4 ? (
                <Form2
                  key={4}
                  formNumber={"form4"}
                  subtitle="FACILITA' DI ACQUISTO"
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : step === 5 ? (
                <Form2
                  key={5}
                  formNumber={"form5"}
                  subtitle="ASSISTENZA ALL'ACQUISTO/SERVIZIO CLIENTI"
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : step === 6 ? (
                <Form2
                  key={6}
                  formNumber={"form6"}
                  subtitle="SPEDIZIONE & PACKAGING"
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : step === 7 ? (
                <Form3
                  key={7}
                  formNumber={"form7"}
                  title="CONSIGLIERESTI UN PRODOTTO TOD'S AD UN AMICO?"
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : (
                <Privacy
                  formData={formData}
                  formNumber={"form8"}
                  setFormData={setFormData}
                />
              )}
              <ButtonGroup mt="5%" w="100%" minW={"10rem"}>
                <Box display={"flex"} ml={"auto"} mr={"auto"} gap={"6rem"}>
                  <Button
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 12.5);
                    }}
                    hidden={step === 1}
                    colorScheme="tods"
                    variant="outline"
                    bgColor={"#F5F5DC"}
                    w="2.5rem"
                    h="2.5rem"
                  >
                    <Text>
                      <ImArrowLeft2 color="#8B4513" />
                    </Text>
                  </Button>
                  <Button
                    w="2.5rem"
                    h="2.5rem"
                    ml="1.5rem"
                    hidden={step === 8 || isFormPageEmpty()}
                    onClick={handleClick}
                    colorScheme="tods"
                    bgColor={"#F5F5DC"}
                    variant="outline"
                  >
                    <Text>
                      <ImArrowRight2 color="#8B4513" />
                    </Text>
                  </Button>
                </Box>
                {step === 8 ? (
                  <Button
                    variant="submit"
                    mr={"auto"}
                    type="submit"
                    disabled={!formState.isValid}
                  >
                    Invia
                  </Button>
                ) : null}
              </ButtonGroup>
            </>
          ) : (
            <ThankYouPage />
          )}
        </Box>
      </Center>
    </form>
  );
};
