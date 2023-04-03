import {
  Center,
  FormControl,
  FormLabel,
  Hide,
  HStack,
  Show,
  Spacer,
  Text,
  Textarea,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { FormType } from "../../types/FormTypes";
import { FormButton } from "../FormButton";
import { FormHeading } from "./FormHeading";

export const Form2 = ({
  formData,
  setFormData,
  title,
  pageNumber,
  subtitle,
  formNumber,
}: FormType) => {
  const options = ["1", "2", "3", "4", "5"];
  const options2 = [
    "1 - Per niente soddisfatto",
    "2 - Non molto soddisfatto",
    "3 - Sufficientemente soddisfatto",
    "4 - Soddisfatto",
    "5 - Pienamente soddisfatto",
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Form2Group",
    defaultValue: formData[formNumber] || "",
  });
  const group = getRootProps();

  return (
    <>
      <FormHeading
        title={
          "COME VALUTEREBBE I SEGUENTI SERVIZI DELLA NOSTRA BOUTIQUE ONLINE?"
        }
        pageNumber={2}
        subtitle={subtitle ? subtitle : ""}
      />

      <Show above="md">
        <Center>
          <HStack w={"40rem"}>
            <Text fontStyle={"italic"}>{options2[0]}</Text>
            <Spacer /> <Text fontStyle={"italic"}>{options2[4]}</Text>
          </HStack>
        </Center>
      </Show>
      <FormControl>
        <Hide below="md">
          <Center>
            <HStack
              justifyContent={"space-evenly"}
              {...group}
              textAlign="center"
            >
              {options.map((value, index) => {
                const radio = getRadioProps({ value });
                return (
                  <FormButton
                    isChecked={radio.isChecked}
                    formNumber={formNumber}
                    setFormData={setFormData}
                    formData={formData}
                    value={value}
                    key={value}
                    buttonNumber={(index + 1).toString()}
                    {...radio}
                  />
                );
              })}
            </HStack>
          </Center>
        </Hide>
        <Show below="md">
          <Center>
            <VStack {...group} display={"block"} textAlign="center">
              {options.map((value, index) => {
                const radio = getRadioProps({ value });
                return (
                  <FormButton
                    isChecked={radio.isChecked}
                    textAlign={"left"}
                    value={value}
                    key={value}
                    label={options2[index]}
                    formNumber={formNumber}
                    setFormData={setFormData}
                    formData={formData}
                    buttonNumber={(index + 1).toString()}
                    {...radio}
                  />
                );
              })}
            </VStack>
          </Center>
        </Show>

        <Center mt="2rem">
          <VStack w="50%" minH="8rem">
            {formData[formNumber] === "1" ||
              (formData[formNumber] === "2" && (
                <>
                  <FormLabel textAlign={"center"} fontStyle={"italic"}>Quali problemi ha riscontrato?</FormLabel>
                  <Textarea placeholder="..." />{" "}
                </>
              ))}
          </VStack>
        </Center>
      </FormControl>
    </>
  );
};
