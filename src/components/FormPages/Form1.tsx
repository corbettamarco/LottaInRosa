import {
  Box,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import { FormButton } from "../FormButton";

type Form1Type = {
  title?: string;
  number?: number;
  subtitle?: string;
};

export const Form1 = ({ title, number, subtitle }: Form1Type) => {
  return (
    <>
      <Heading w="100%" textAlign="center" as="h2" size="6xl" mt="10px">
        {" "}
        1. DA QUANTO TEMPO SEI CLIENTE TOD'S?{" "}
      </Heading>

      <Box textAlign="center" mt="2rem">
        <FormControl>
          <FormButton value={"Primo acquisto"} />
          <FormButton value={"1 anno"} />
          <FormButton value={"1-2 anni"} />
          <FormButton value={"3-4 anni"} />
          <FormButton value={"più di 6 anni"} />
        </FormControl>
      </Box>
    </>
  );
};
