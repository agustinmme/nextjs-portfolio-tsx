import {Box, Heading, Text} from "@chakra-ui/react";
import React from "react";

import NextLink from "../ui/controls/NextLink";
import Button from "../ui/controls/Button";

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
        <Heading
          as="h2"
          backgroundClip="text"
          bgGradient="linear(to-r, primary.300, primary.400)"
          display="inline-block"
          size="4xl"
        >
          404
        </Heading>
        <Text fontSize="lg" mb={2} mt={3}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          {"La página que estás buscando no parece existir"}
        </Text>
        <NextLink href="/">
          <Button mx="auto" size={"xl"} w="50%">
            GO HOME
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default notFound;
