import { Box, Button, ButtonGroup, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Form1 } from "./FormPages/Form1";
import { Form2 } from "./FormPages/Form2";
import { Privacy } from "./FormPages/Privacy";
import { ProgressBarWithAnimatedImage } from "./ProgressBar/ProgeressBarWithAnimatedImage";

export const Multistep = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [jump, setJump] = useState(false);
  const { formState } = useForm({
    mode: "onChange",
  });

  const handleClick = () => {
    setStep(step + 1);
    if (step === 3) {
      setProgress(100);
    } else {
      setProgress(progress + 33.33);
    }
    setJump(!jump);
  };

  return (
    <form>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="2rem auto"
      >
        <Image src='tods-logo.png' objectFit='cover' boxSize='150px' display={"block"} ml={"auto"} mr={"auto"} alt='logo' />
        <ProgressBarWithAnimatedImage
          progress={progress}
          setProgress={setProgress}
          jump={jump}
        />
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Privacy />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%">
            <Box display={"block"} ml={"auto"} mr={"auto"}>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                hidden={step === 1}
                colorScheme="tods"
                variant="outline"
                bgColor={"#F5F5DC"}
                w="2.5rem"
                h='2.5rem'
              >
                🡨
              </Button>
              <Button
                w="2.5rem"
                h='2.5rem'
                ml="1.5rem"
                hidden={step === 3}
                onClick={handleClick}
                colorScheme="tods"
                bgColor={"#F5F5DC"}
                variant="outline"
                disabled={!formState.isValid}
              >
                 🡪
              </Button>
            </Box>
            {step === 3 ? (
              <Button
                variant="submit"
                mr={"auto"}
                onSubmit={() => {
                  toast({
                    title: "Grazie per aver partecipato al sondaggio",
                    description:
                      "Riceverai il codice sconto al tuo indirizzo email",
                    colorScheme: "tods",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
                type="submit"
                disabled={!formState.isValid}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </form>
  );
};
