import { ButtonGroup, Button, Box, Text } from "@chakra-ui/react";
import React from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { isFormPageEmpty } from "./utils/isFormPageEmpty";
import { FieldValues, FormState } from "react-hook-form";

type FormButtonGroupType = {
  step: number;
  setStep: (step: number) => void;
  progress: number;
  setProgress: (progress: number)=>void
  formData: any
  handleClick: ()=> void
  formState:FormState<FieldValues>
};

export const FormButtonGroup = ({step, setStep, progress, setProgress, formData, handleClick, formState}: FormButtonGroupType) => {
  return (
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
          hidden={step === 8 || isFormPageEmpty(step, formData)}
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
  );
};
