import {FormControl, FormLabel, Input, InputGroup, Textarea, VStack} from "@chakra-ui/react";
import React from "react";

import {useToast} from "../hook/useToast";
import {mail} from "../libs/mail";
import Button from "../ui/controls/Button";
interface Props {}

//Cambiar Formik && Yup

const FormContact: React.FC<Props> = () => {
  const toast = useToast();

  const formRef = React.useRef<any>();

  return (
    <>
      {
        <VStack
          ref={formRef}
          as="form"
          spacing={5}
          onSubmit={async (e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              email: {value: string};
              message: {value: string};
              reset: () => void;
            };
            const email = target.email.value;
            const message = target.message.value;

            try {
              const data = await mail({email, message});

              if (data.ok)
                toast({
                  title: "Enviado",
                  description:
                    "Gracias por contactarse, he recibido su mensaje. Le respondre en la brevedad.",
                  status: "success",
                  duration: 2000,
                });
              target.reset();
            } catch (error: any) {
              toast({
                title: "Enviado",
                description: error.response.data.error as string,
                status: "error",
                duration: 2000,
              });
            }
          }}
        >
          <FormControl isRequired name="_replyto" type="email">
            <FormLabel color="secondary.900" fontWeight={"600"}>
              EMAIL
            </FormLabel>
            <InputGroup borderColor="secondary.300">
              <Input
                border={"3px solid"}
                borderColor="secondary.900"
                focusBorderColor="primary.400"
                name="email"
                placeholder="agustinmansilla240@gmail.com"
                rounded={"none"}
                size="md"
                type="email"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired name="message">
            <FormLabel color="secondary.900" fontWeight={"600"}>
              MENSAJE
            </FormLabel>
            <Textarea
              _hover={{
                borderColor: "secondary.300",
              }}
              border={"3px solid"}
              borderColor="secondary.900"
              focusBorderColor="primary.400"
              id="message"
              name="message"
              placeholder="Hola como estas?"
              rounded={"none"}
            />
          </FormControl>

          <Button mx="auto" size="lg" type="submit" variant="solid" w="70%">
            ENVIAR
          </Button>
        </VStack>
      }
    </>
  );
};

export default FormContact;
