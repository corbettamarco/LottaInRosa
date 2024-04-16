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
    <ButtonGroup pointerEvents={'none'} w="100%" zIndex={3} bottom={['40vh','40vh','0','0','0']} position="absolute" display={'flex'} justifyContent={'space-between'} flexDirection={'row'} >
      <Box w="100%" flexDirection={'row'} display={'flex'}>
        <Button
          onClick={handleBackClick}
          visibility={step === 1 ? "hidden" : "visible"}
          colorScheme="tods"
          variant="outline"
          bgColor={"tods.50"}
          w={'15vw'}
          maxW={'15vw'}
          borderLeftRadius={'0'}
          minH={'5rem'}
          pointerEvents={'initial'} 
        >
          <Text>
            <ImArrowLeft2 color="black" />
          </Text>
        </Button>
        <Spacer/>
        <Button
          pointerEvents={'all'} 
          hidden={step === 8 || isFormPageEmpty(step, formData)}
          onClick={handleNextClick}
          colorScheme="tods"
          bgColor={"#F0B2BE"}
          variant="outline"
          w={'15vw'}
          maxW={'15vw'}
          borderRightRadius={'0'}
          minH={'5rem'}
        >
          <Text>
            <ImArrowRight2 color="black" />
          </Text>
        </Button>
      {step === 8 && !isFormPageEmpty(step, formData) ? (
        <Button
          pointerEvents={'all'} 
          type="submit"
          disabled={!formState.isValid}
          bgColor={"#F0B2BE"}
          borderColor={'tods.400'}
          borderWidth={'1px'}
          borderRightRadius={'0'}
          w={'15vw'}
          maxW={'15vw'}
          borderTopLeftRadius={'.5rem'}
          minH={'5rem'}

        >
          Invia
        </Button>
      ) : null}
            </Box>

    </ButtonGroup>
  );
};
