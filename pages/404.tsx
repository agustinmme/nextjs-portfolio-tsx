import {Box, Text, Button} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import NextLink from "../ui/controls/NextLink";

interface Props {}

const notFound: React.FC<Props> = () => {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      h="100vh"
      justifyContent={"center"}
      textAlign="center"
    >
      <Box>
        <Image
          alt="Para,la página que estás buscando no existe"
          height={500}
          src={"/assets/image/not-found.png"}
          width={500}
        />
        <Text fontSize="lg" mb={2} mt={3}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          {"La página que estás buscando no parece existir"}
        </Text>
        <NextLink href="/">
          <Button p={3} size={"xl"} variant={"ghost"}>
            Volver
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default notFound;
