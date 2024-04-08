import {
  Center,
  FormControl,
  Stack,
  useRadioGroup
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
  formTextValue,
  setFormTextValue,
}: FormType) => {
  const options =  ["1", "2", "3", "4"];
  const options2 = ["25%", "10%", "40%", "15%"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Form2Group",
    defaultValue: formData[formNumber] || "",
  });
  const group = getRootProps();
  // const handleChange = (value: string) => {
  //   setFormTextValue({ ...formTextValue, [formNumber]: value });
  // };
  return (
    <>
      <FormHeading
        title={
          subtitle
        }
        pageNumber={formNumber.replace(/\D/g, "")}
        subtitle={""}
      />

      {/* <Show above="md">
        <Center>
          <HStack w={"40rem"}>
            <Text fontStyle={"italic"}>{options2[0]}</Text>
            <Spacer /> <Text fontStyle={"italic"}>{options2[4]}</Text>
          </HStack>
        </Center>
      </Show> */}
      <FormControl>
        <Center>
          <Stack
            direction={["column", "column", "row", "row", "row"]}
            justifyContent={"space-between"}
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

        {/* <Center mt="2rem">
          <VStack w="50%" minH="8rem">
            {(formData[formNumber] === "1" || formData[formNumber] === "2") && (
              <>
                <FormLabel textAlign={"center"} fontStyle={"italic"}>
                  Quali problemi ha riscontrato?
                </FormLabel>
                <Textarea
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="..."
                  value={formTextValue[formNumber]}
                />{" "}
              </>
            )}
          </VStack>
        </Center> */}
      </FormControl>
    </>
  );
};
