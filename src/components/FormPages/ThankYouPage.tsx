import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const ThankYouPage = () => {
  return (
    <VStack mt="2rem">
      <CheckCircleIcon color="tods.300" boxSize="2rem" />
      <Heading py="1rem" fontStyle={"italic"} fontSize={"lg"} textAlign={"center"} lineHeight={"2rem"}>
       Grazie per aver risposto al sondaggio.<br></br> La tua opinione è importante per noi e ci servirà per offrire un servizio migliore.
      </Heading>
      <Text
        fontSize={"1.5rem"}
        color={"tods.400"}
        _hover={{ textUnderlineOffset: "7px" }} 
      >
        <Link href="https://www.tods.com/gb-en/home/">
          <LinkIcon boxSize={"1rem"} mb=".3rem" mr=".5rem"/>Vai alla Home Page di Tod's
        </Link>
      </Text>
    </VStack>
  );
};
