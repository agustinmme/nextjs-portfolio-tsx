import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

import Logo from "../../../ui/static/Logo";

import Link from "./Link";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Box>
      <Box py={10}>
        <Flex
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "secondary.500",
            flexGrow: 1,
            ml: 8,
          }}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "secondary.500",
            flexGrow: 1,
            mr: 8,
          }}
          align={"center"}
        >
          <Logo />
        </Flex>
        <Text fontSize={"sm"} pt={6} textAlign={"center"}>
          Built with
          <Link isExternal href="https://nextjs.org/">
            NextJS
          </Link>{" "}
          &
          <Link isExternal href="https://chakra-ui.com/">
            ChakraUI
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
