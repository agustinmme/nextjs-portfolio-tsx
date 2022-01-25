import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  VStack,
  Button,
  Stack,
} from "@chakra-ui/react";
import React from "react";

import {useToast} from "../hook/useToast";
import {mail} from "../libs/mail";
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
          rounded={5}
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
                rounded={5}
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
              rounded={5}
            />
          </FormControl>
          <FormControl display={"flex"} justifyContent={"flex-end"}>
            <Stack isInline gap={10} mt={10}>
              <Button
                _active={{bg: "black", color: "primary.200"}}
                _hover={{bg: "black", color: "primary.200"}}
                bg="primary.200"
                color={"black"}
                size="lg"
                type="submit"
                variant="solid"
              >
                ENVIAR
              </Button>
              <Button
                _active={{color: "black", bg: "primary.200"}}
                _hover={{color: "black", bg: "primary.200"}}
                color={"black"}
                size="lg"
                type="reset"
                variant="ghost"
              >
                Cancelar
              </Button>
            </Stack>
          </FormControl>
        </VStack>
      }
    </>
  );
};

export default FormContact;
