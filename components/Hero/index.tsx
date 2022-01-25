import {Box, chakra, Heading, Stack} from "@chakra-ui/react";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Image from "next/image";

import {useToast} from "../../hook/useToast";
import Link from "../../ui/controls/Link";
import Tooltip from "../../ui/display/Tooltip";

import LetterLoop from "./LetterLoop";

interface Props {}

const Hero: React.FC<Props> = () => {
  const toast = useToast();

  return (
    <>
      <Stack
        alignItems={"center"}
        direction={["column", "row"]}
        mb={10}
        mt={{base: "0", md: "24"}}
        position={"relative"}
      >
        <Box position={{base: "static", md: "absolute"}} right={"10vw"} top={"-15vh"} zIndex={-999}>
          <Image
            alt="Dibujo vetorial sobre Agustin"
            height={300}
            src={"/assets/image/avatar.png"}
            width={300}
          />
        </Box>
        <Box>
          <Box display={"flex"} ml={-5}>
            <Heading fontSize={{base: "4xl", md: "6xl", lg: "7xl"}} fontWeight={"700"}>
              {"Bienvenid"}
            </Heading>
            <LetterLoop />
            <Heading
              fontSize={{base: "4xl", md: "6xl", lg: "7xl"}}
              fontWeight={"700"}
              ml={{base: 6, md: 8, lg: 10}}
            >
              {"!"}
            </Heading>
          </Box>
          <Heading
            fontSize={{base: "4xl", md: "6xl", lg: "7xl"}}
            fontWeight={"700"}
            ml={{base: 3, md: 6}}
          >
            {"a mi página web"}
          </Heading>
        </Box>
      </Stack>
      <Box fontSize={{base: "md", md: "lg"}} my={2}>
        <chakra.p>
          Hola! soy Agustin Mansilla un desarrollador, Fullstack mas enfocado en el Frontend con
          mucha curiosidad y en constante aprendizaje, actualmente estoy desarollando con{" "}
          <Link isExternal href="https://nextjs.org/">
            <Tooltip label={"Ir a NextJS"}>NextJS</Tooltip>
          </Link>
          un framework de React.
        </chakra.p>
        <chakra.p>
          En este momento estoy en busqueda de mi primer empleo en el area IT. Ademas en mi tiempo
          libre trabajo en desarrollar aplicaciones a conocidos. También paso el tiempo en{" "}
          <CopyToClipboard text="agustinmme#5628">
            <Link
              onClick={() => {
                toast({
                  title: "Discord",
                  description: "Te he copiado mi usuario",
                  status: "success",
                  duration: 2000,
                });
              }}
            >
              <Tooltip label={"Copiar usuario"}>Discord</Tooltip>
            </Link>
          </CopyToClipboard>
          ,{" "}
          <Link isExternal href="https://twitter.com/agustinmme1">
            <Tooltip label={"Ir a Twitter"}>Twitter</Tooltip>
          </Link>{" "}
          y
          <Link isExternal href="https://www.linkedin.com/in/agustinmme/">
            <Tooltip label={"Ir a Linkedin"}>Linkedin</Tooltip>
          </Link>
          donde aprendo y público mis trabajos.
        </chakra.p>
      </Box>
    </>
  );
};

export default Hero;
