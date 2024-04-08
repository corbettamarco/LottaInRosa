import { ButtonGroup, Button, Box, Text } from "@chakra-ui/react";
import React from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { isFormPageEmpty } from "./utils/isFormPageEmpty";
import { FieldValues, FormState } from "react-hook-form";

type FormButtonGroupType = {
  step: number;
  formData: any;
  handleNextClick: () => void;
  handleBackClick: () => void;
  formState: FormState<FieldValues>;
};

export const FormButtonGroup = ({
  step,

  formData,
  handleNextClick,
  handleBackClick,
  formState,
}: FormButtonGroupType) => {
  return (
    <ButtonGroup mt={['2rem','1rem','6rem','6rem','6rem']} w="100%" minW={"10rem"}>
      <Box display={"flex"} ml={"auto"} mr={"auto"} gap={"6rem"} bottom={0}>
        <Button
          onClick={handleBackClick}
          visibility={step === 1 ? "hidden" : "visible"}
          colorScheme="tods"
          variant="outline"
          bgColor={"tods.50"}
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
          hidden={step === 10 || isFormPageEmpty(step, formData)}
          onClick={handleNextClick}
          colorScheme="tods"
          bgColor={"tods.200"}
          variant="outline"
        >
          <Text>
            <ImArrowRight2 color="#8B4513" />
          </Text>
        </Button>
      </Box>
      {step === 10 && !isFormPageEmpty(step, formData) ? (
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
