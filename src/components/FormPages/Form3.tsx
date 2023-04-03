import {
  Center,
  FormControl,
  Hide,
  HStack,
  Show,
  Spacer,
  Text,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { FormType } from "../../types/FormTypes";
import { FormButton } from "../FormButton";
import { FormHeading } from "./FormHeading";

export const Form3 = ({
  title,
  pageNumber,
  subtitle,
  formNumber,
  setFormData,
  formData,
}: FormType) => {
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const options2 = [
    "1 - No, per niente",
    "2 ",
    "3 ",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10 - Certamente sì",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Form3Group",
    defaultValue: formData[formNumber] || "",
  });
  const group = getRootProps();
  return (
    <>
      <FormHeading
        pageNumber={3}
        title="CONSIGLIEREBBE UN PRODOTTO TOD'S AD UN AMICO?"
      />
      <FormControl>
        <Hide below="md">
          <Center>
            <HStack w={"40rem"}>
              <Text fontStyle={"italic"}>No, per niente</Text>
              <Spacer /> <Text fontStyle={"italic"}>Certamente sì</Text>
            </HStack>
          </Center>
        </Hide>
        <Hide below="md">
          <Center>
            <HStack
              w="full"
              justifyContent={"space-evenly"}
              {...group}
              textAlign="center"
            >
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <FormButton
                    isChecked={radio.isChecked}
                    minW={"3.5rem"}
                    value={value}
                    key={value}
                    {...radio}
                    formNumber={formNumber}
                    setFormData={setFormData}
                    formData={formData}
                  />
                );
              })}
            </HStack>
          </Center>
        </Hide>
        <Show below="md">
          <Center>
            <VStack {...group} display={"block"} textAlign="center">
              {options2.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <FormButton
                    isChecked={radio.isChecked}
                    textAlign={"left"}
                    value={value}
                    key={value}
                    {...radio}
                    formNumber={formNumber}
                    setFormData={setFormData}
                    formData={formData}
                  />
                );
              })}
            </VStack>
          </Center>
        </Show>
      </FormControl>
    </>
  );
};
