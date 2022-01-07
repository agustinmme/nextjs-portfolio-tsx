import {
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {CgMenuMotion, CgClose} from "react-icons/cg";
import useSound from "use-sound";

import NextLink from "../../../ui/controls/NextLink";
import Logo from "../../../ui/static/Logo";

import Background from "./Background";
import NavItem from "./NavItem";

interface Props {}

const ModalTest: React.FC<Props> = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [play] = useSound("/assets/audios/click.mp3");
  const handlerOpen = () => {
    play();
    onOpen();
  };
  const handlerClose = () => {
    play();
    onClose();
  };

  return (
    <>
      {" "}
      <IconButton
        aria-label="Open navbar"
        colorScheme={"primary"}
        icon={<CgMenuMotion size={"30px"} />}
        mr={4}
        mt={4}
        size={"lg"}
        variant={"ghost"}
        onClick={handlerOpen}
      />
      <Modal isOpen={isOpen} size={"full"} onClose={onClose}>
        <ModalOverlay bg={"whiteAlpha.50"} />
        <ModalContent maxW="2xl">
          <Background />
          <ModalHeader display={"flex"} justifyContent={"space-between"}>
            <Logo fontSize="5xl" my={2} />
            <IconButton
              aria-label="Close navbar"
              colorScheme={"primary"}
              icon={<CgClose size={"30px"} />}
              mr={4}
              mt={4}
              size={"lg"}
              variant={"ghost"}
              onClick={handlerClose}
            />
          </ModalHeader>

          <ModalBody
            alignItems="flex-start"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <NextLink href="/">
              <NavItem onClose={onClose}>inicio</NavItem>
            </NextLink>
            <NextLink href="/project">
              <NavItem onClose={onClose}>proyectos</NavItem>
            </NextLink>
            <NextLink href="/contact">
              <NavItem onClose={onClose}>contacto</NavItem>
            </NextLink>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalTest;
