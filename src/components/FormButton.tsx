import { Button } from "@chakra-ui/react";

type FormButtonProps = {
  value: number | string;
};

export const FormButton = ({ value }: FormButtonProps) => {
  return (
    <Button
      mt="1rem"
      px="2rem"
      mr='0.5rem'
      textColor={"orange.600"}
      bgColor={"white"}
      borderWidth="1px"
      borderColor="tods.200"
    >
      {value}
    </Button>
  );
};
