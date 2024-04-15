import { CheckCircleIcon } from "@chakra-ui/icons";
import { Heading, Text, VStack } from "@chakra-ui/react";

export const ThankYouPage = ({
  correctAnswers,
}: {
  correctAnswers?: number;
}) => {
  return (
    <VStack mt="2rem" textAlign={'center'}>
      <CheckCircleIcon color="tods.300" boxSize="2rem" />
      <Heading
        py="1rem"
        fontStyle={"italic"}
        fontSize={"lg"}
        textAlign={"center"}
        lineHeight={"2rem"}
      >
        Grazie per aver risposto al quiz!<br></br>
      </Heading>
      <Text
        fontSize={"1.5rem"}
        color={"tods.600"}
        fontWeight={'bold'}
        _hover={{ textUnderlineOffset: "7px" }}
      >
        Il tuo risultato é {correctAnswers?.toString()}/8 <br/><br/>
      </Text>
      <Text color='black' fontSize='1.2rem' fontWeight={'bold'}>
      {
        correctAnswers && correctAnswers <= 3 && "Ne sai troppo poco, informati su www.lottainrosa.it"
      }
      {
        correctAnswers && correctAnswers > 3 && correctAnswers <= 5 && "Potresti far meglio, informati su www.lottainrosa.it"
      }
      {
        correctAnswers && correctAnswers > 5 && "Sei ben informata!"
      }
      </Text>
    </VStack>
  );
};
