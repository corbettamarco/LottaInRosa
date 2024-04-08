import { CheckCircleIcon } from "@chakra-ui/icons";
import { Heading, Text, VStack } from "@chakra-ui/react";

export const ThankYouPage = ({
  correctAnswers,
}: {
  correctAnswers?: Number;
}) => {
  return (
    <VStack mt="2rem">
      <CheckCircleIcon color="tods.300" boxSize="2rem" />
      <Heading
        py="1rem"
        fontStyle={"italic"}
        fontSize={"lg"}
        textAlign={"center"}
        lineHeight={"2rem"}
      >
        Grazie per aver risposto al sondaggio.<br></br>
      </Heading>
      <Text
        fontSize={"1.5rem"}
        color={"tods.400"}
        _hover={{ textUnderlineOffset: "7px" }}
      >
        {correctAnswers?.toString()} risposte corrette su 10.
      </Text>
    </VStack>
  );
};
