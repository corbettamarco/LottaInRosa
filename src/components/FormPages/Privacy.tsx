import { Checkbox, FormControl, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const Privacy = () => {
  const { register } = useForm({
    mode: "onChange",
  });
  return (
    <Stack>
      <Text> Letta  <Link href='https://www.tods.com/it-it/privacy-policy/' isExternal color='blue' > l'Informativa Privacy</Link>,</Text>
      <HStack>
        <Text>*</Text>
        <FormControl isRequired>
          <Checkbox
            isRequired
            colorScheme={"tods"}
            {...register("name", {
              required: "E' necessarrio accettare",
            })}
          >
            {" "}
            <Text mt="1.5rem">
              {" "}
              <b> ACCONSENTO </b> al trattamento dei miei dati personali al fine
              della rilevazione del mio grado di soddisfazione circa
              l'esperienza di acquisto effettuata e relative analisi ed
              elaborazioni.{" "}
            </Text>
          </Checkbox>
        </FormControl>
      </HStack>

      <HStack pl="1rem">
        <Checkbox colorScheme={"tods"} mb="1.5rem">
          {" "}
          <Text mt="1.5rem">
            {" "}
            <b> ACCONSENTO </b> ad essere ricontattato per approfondimenti
            riguardo la mia recente esperienza di acquisto
          </Text>
        </Checkbox>
      </HStack>
      <Text fontStyle={"italic"}>
        I campi contrassegnati con * sono OBBLIGATORI
      </Text>
    </Stack>
  );
};
