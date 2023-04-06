import { Box, Text, useRadio } from "@chakra-ui/react";
import React from "react";

export function FormButton(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  const handleUpdateFormData = () => {
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
        color="orange.600"
        mt="1rem"
        px={[".5rem", "1rem", "1rem", "1rem", "1rem"]}
        mr="0.5rem"
        bgColor="white"
        borderWidth="2px"
        shadow="sm"
        borderColor="#F5F5DC"
        _checked={{
          bg: "#F5F5DC",
          color: "orange.600",
          borderColor: "#F5F5DC",
        }}
        py={3}
        rounded="md"
        textAlign={props.textAlign ? props.textAlign : "center"}
        maxW="30rem"
        minW={props.minW ? props.minW : "5rem"}
      >
        <Text noOfLines={1} fontSize={["xs", "sm", "md", "lg", "xl"]}>
          {props.label ? props.label : props.value}
        </Text>
      </Box>
    </Box>
  );
}
