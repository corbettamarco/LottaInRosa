import { CheckCircleIcon } from "@chakra-ui/icons";
import { Heading, Link, Text, VStack } from "@chakra-ui/react";

export const ThankYouPage = ({
  correctAnswers,
}: {
  correctAnswers?: number;
}) => {
  return (
    <VStack mt="2rem" textAlign={"center"}>
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
        fontWeight={"bold"}
        _hover={{ textUnderlineOffset: "7px" }}
      >
        Il tuo risultato é {correctAnswers?.toString()}/8 <br />
        <br />
      </Text>
      <Text color="black" fontSize="1.2rem" fontWeight={"bold"} px={".5rem"}>
        {correctAnswers && correctAnswers <= 3 && (
          <>
            Sembri saperne troppo poco, corri a informarti sul sito{" "}
            <a href="http://www.lottainrosa.it">www.lottainrosa.it</a> e scopri
            tutte le nostre iniziative gratuite pensate apposta per te!
          </>
        )}
        {correctAnswers && correctAnswers > 3 && correctAnswers <= 6 && (
          <>
            Te la cavi abbastanza ma puoi fare di meglio :) Fai un salto sul
            sito <a href="http://www.lottainrosa.it">www.lottainrosa.it</a> e
            scopri la tua percentuale di rischio! Puoi anche prenotare un
            consulto gratuito presso i nostri centri convenzionati!
          </>
        )}
        {correctAnswers && correctAnswers > 6 && (
          <>
            Sembri essere ben informata! Ma c'è sempre qualcosa da imparare :)
            Corri sul sito{" "}
            <a href="http://www.lottainrosa.it">www.lottainrosa.it</a> per
            scoprire la tua percentuale di rischio e prenotare un consulto
            gratuito presso i nostri centri convenzionati!
          </>
        )}
      </Text>
      <Heading pt='4rem' color="tods.300">
        <a href="/" >Riprova</a>
      </Heading>
    </VStack>
  );
};
