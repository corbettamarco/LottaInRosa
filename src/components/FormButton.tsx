import { Box, Text, useRadio } from "@chakra-ui/react";

export function FormButton(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  const handleUpdateFormData = () => {
    props.setFormData({ ...props.formData, [props.formNumber]: props.buttonNumber });
    props.setFormData({ ...props.formData, [props.formNumber]: props.buttonNumber });
    console.log(props.buttonNumber)
  };

  return (
    <Box as="label">
      <input {...input} onClick={handleUpdateFormData} />
      <Box
        {...checkbox}
        cursor="pointer"
        fontWeight="bold"
        color="tods.600"
        mt="1rem"
        px={[".5rem", "1rem", "1rem", "1rem", "1rem"]}
        mr="0.5rem"
        bgColor="white"
        borderWidth="2px"
        shadow="sm"
        borderColor="tods.200"
        _checked={{
          bg: "tods.200",
          color: "tods.600",
          borderColor: "tods.200",
        }}
        py={3}
        rounded="md"
        textAlign={props.textAlign ? props.textAlign : "center"}
        maxW="30rem"
        minW={props.minW ? props.minW : "5rem"}
      >
        <Text noOfLines={1} fontSize={["xs", "sm", "md", "md", "md"]}>
          {props.label}
        </Text>
      </Box>
    </Box>
  );
}
