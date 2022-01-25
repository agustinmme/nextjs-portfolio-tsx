import {Flex, Container, Stack} from "@chakra-ui/react";
import React from "react";

import Logo from "../../../ui/static/Logo";
import NextLink from "../../../ui/controls/NextLink";

import MobileNav from "./MobileNav";
import NavItem from "./NavItem";

interface Props {}
const Navbar: React.FC<Props> = () => {
  return (
    <Flex
      as="nav"
      bg={"white"}
      borderBottom={"1px"}
      borderBottomColor={"primary.200"}
      direction="row"
      justifyContent="space-between"
      pos="sticky"
      py={5}
      shadow={"0 15px 15px -15px #eeeeee"}
      top="0"
      w="full"
      zIndex="10"
    >
      <Container maxW={"5xl"}>
        <Flex direction="row" justifyContent="space-between">
          <NextLink href={"/"} mt="3" p="0">
            <Logo fontSize={"3xl"} />
          </NextLink>
          <Flex display={{base: "none", md: "flex"}}>
            <Stack isInline alignItems={"center"} gap={0} justifyContent={"center"}>
              <NavItem>
                <NextLink href="/">Inicio</NextLink>
              </NavItem>
              <NavItem>
                <NextLink href="/projects">Proyectos</NextLink>
              </NavItem>
              <NavItem>
                <NextLink href="/contact">Contacto</NextLink>
              </NavItem>
            </Stack>
          </Flex>
          <MobileNav />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
