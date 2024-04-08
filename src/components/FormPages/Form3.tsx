import {
  Center,
  FormControl,
  HStack,
  Show,
  Spacer,
  Stack,
  Text,
  useRadioGroup
} from "@chakra-ui/react";
import React from "react";
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
  const options =  ["1", "2", "3", "4"];

  const options2 = [
    "È dolente al tatto",
    "Le dimensioni variano in base al ciclo mestruale",
    "Appare duro e dalla superfiie irregolare",
    "Appare mobile",
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
        <Show above="md">
          <Center>
            <HStack w={"40rem"}>
              <Text fontStyle={"italic"}>No, per niente</Text>
              <Spacer /> <Text fontStyle={"italic"}>Certamente sì</Text>
            </HStack>
          </Center>
        </Show>

        <Center>
          <Stack
            direction={["column", "column", "row", "row", "row"]}
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
                  textAlign={["left", "left", "center", "center", "center"]}
                  buttonNumber={(index + 1).toString()}
                  {...radio}
                  label={options2[index]}
                  minW={["auto","auto","3.2rem","3.5rem","3.5rem"]}
                />
              );
            })}
          </Stack>
        </Center>

      </FormControl>
    </>
  );
};
