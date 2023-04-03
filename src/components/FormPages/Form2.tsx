import {
  Box,
  FormControl,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FormButton } from "../FormButton";

export const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} as="h2" size="6xl" mt="10px">
        {" "}
        2. COME VALUTEREBBE I SEGUENTI SERVIZI DELLA NOSTRA BOUTIQUE ONLINE?{" "}
      </Heading>
      <Text textAlign={"center"} mt={"2rem"}>
        {" "}
        VELOCITÀ DI NAVIGAZIONE{" "}
      </Text>
      <FormControl as={GridItem}>
        <Box textAlign="center" mt="2rem">
          <FormButton value={1} />
          <FormButton value={2} />
          <FormButton value={3} />
          <FormButton value={4} />
          <FormButton value={5} />
        </Box>
      </FormControl>
    </>
  );
};
