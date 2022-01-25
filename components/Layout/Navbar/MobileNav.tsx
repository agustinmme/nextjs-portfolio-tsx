import {Button, CloseButton, Flex, IconButton, useDisclosure, VStack} from "@chakra-ui/react";
import React from "react";
import {CgMenuMotion} from "react-icons/cg";

import NextLink from "../../../ui/controls/NextLink";

interface Props {}

const MobileNav: React.FC<Props> = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Flex display={{base: "flex", md: "none"}}>
        <IconButton
          aria-label="Open menu"
          color={"gray.800"}
          display={{base: "flex", md: "none"}}
          fontSize="25px"
          icon={<CgMenuMotion />}
          mt={3}
          variant="ghost"
          onClick={onOpen}
        />
        <VStack
          bg={"white"}
          borderBottom={"2px solid"}
          borderBottomColor={"yellow.200"}
          display={isOpen ? "flex" : "none"}
          flexDirection="column"
          left={0}
          m={2}
          p={2}
          pb={4}
          pos="absolute"
          right={0}
          rounded="sm"
          shadow="sm"
          spacing={3}
          top={0}
        >
          <CloseButton aria-label="Close menu" onClick={onClose} />

          <NextLink href="/">
            <Button variant="ghost" w="full">
              Inicio
            </Button>
          </NextLink>
          <NextLink href="/projects">
            <Button variant="ghost" w="full">
              Proyectos
            </Button>
          </NextLink>
          <NextLink href="/contact">
            <Button variant="ghost" w="full">
              Contacto
            </Button>
          </NextLink>
        </VStack>
      </Flex>
    </>
  );
};

export default MobileNav;
