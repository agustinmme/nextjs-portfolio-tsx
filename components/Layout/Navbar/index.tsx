import {Flex, Container} from "@chakra-ui/react";

import Logo from "../../../ui/static/Logo";
import NextLink from "../../../ui/controls/NextLink";

import NavModal from "./NavModal";
const Navbar = () => {
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
      <Container maxW={"2xl"}>
        <Flex direction="row" justifyContent="space-between">
          <NextLink href={"/"} mt="3" p="0">
            <Logo fontSize={"3xl"} />
          </NextLink>
          <NavModal />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
