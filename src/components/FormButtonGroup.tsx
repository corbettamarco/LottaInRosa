import { ButtonGroup, Button, Box, Text, Spacer } from "@chakra-ui/react";
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
    <ButtonGroup w="100%" bottom={['3rem','3rem',0,0,0]} position="absolute" display={'flex'} justifyContent={'space-between'} flexDirection={'row'} >
      <Box w="100%" flexDirection={'row'} display={'flex'}>
        <Button
          onClick={handleBackClick}
          visibility={step === 1 ? "hidden" : "visible"}
          colorScheme="tods"
          variant="outline"
          bgColor={"tods.50"}
          borderRadius={'0'}
          w={'45vw'}
          maxW={'45vw'}
          borderTopRightRadius={'.5rem'}

        >
          <Text>
            <ImArrowLeft2 color="black" />
          </Text>
        </Button>
        <Spacer/>
        <Button
          hidden={step === 8 || isFormPageEmpty(step, formData)}
          onClick={handleNextClick}
          colorScheme="tods"
          bgColor={"#F0B2BE"}
          variant="outline"
          borderRadius={'0'}
          w={'45vw'}
          maxW={'45vw'}
          borderTopLeftRadius={'.5rem'}
        >
          <Text>
            <ImArrowRight2 color="black" />
          </Text>
        </Button>
      {step === 8 && !isFormPageEmpty(step, formData) ? (
        <Button
          
          type="submit"
          disabled={!formState.isValid}
          bgColor={"#F0B2BE"}
          borderColor={'tods.400'}
          borderWidth={'2px'}
          borderBottomWidth={0}
          borderRadius={'0'}
          w={'45vw'}
          maxW={'45vw'}
          borderTopLeftRadius={'.5rem'}

        >
          Invia
        </Button>
      ) : null}
            </Box>

    </ButtonGroup>
  );
};
