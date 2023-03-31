import { Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, VStack , HStack, Text} from "@chakra-ui/react";
import { type } from "os";
import { useState } from "react";
import { FormHeading } from "./FormHeading";

type Form1Type = {
  title?: string,
  number?: number,
  subtitle?: string
}


export const Form1 = ({title, number, subtitle}: Form1Type) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (



    <>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};