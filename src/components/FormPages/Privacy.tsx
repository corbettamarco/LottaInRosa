import { Checkbox, Text } from "@chakra-ui/react";

export const Privacy = () => {
  return (
    <>
      <Checkbox mb="1.5rem">
        {" "}
        <Text mt="1.5rem">
          {" "}
           <b> ACCONSENTO </b> al trattamento dei miei dati personali al fine della
          rilevazione del mio grado di soddisfazione circa l'esperienza di
          acquisto effettuata e relative analisi ed elaborazioni.{" "}
        </Text>
      </Checkbox>

      <Checkbox mb="1.5rem">
        {" "}
        <Text mt="1.5rem">
          {" "}
          	<b> ACCONSENTO </b> ad essere ricontattato per approfondimenti riguardo la mia recente esperienza di acquisto
        </Text>
      </Checkbox>
    </>
  );
};
