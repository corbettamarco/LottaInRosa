import {
  Center,
  FormControl,
  Stack,
  useRadioGroup
} from "@chakra-ui/react";
import { FormType } from "../../types/FormTypes";
import { FormButton } from "../FormButton";
import { FormHeading } from "./FormHeading";

export const Form1 = ({
  formData,
  setFormData,
  title,
  pageNumber,
  subtitle,
  formNumber,
}: FormType) => {
  const options = ["1", "2", "3", "4"];
  const options2 = [
    "È dolente al tatto",
    "Le dimensioni variano in base al ciclo mestruale",
    "Appare duro e dalla superfiie irregolare",
    "Appare mobile",
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Form1Group",
    defaultValue: formData[formNumber] || "",
  });
  const group = getRootProps();

  return (
    <>
      <FormHeading
        title={
          "Il nodulo al seno è il sintomo più comune del tumore al seno, quali altre caratteristiche dovrebbero destare preoccupazione?"
        }
        pageNumber={1}
        subtitle={subtitle ? subtitle : ""}
      />

      <FormControl>
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
                />
              );
            })}
          </Stack>
        </Center>
      </FormControl>
    </>
  );
};
