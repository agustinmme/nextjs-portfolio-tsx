import {Box, Text} from "@chakra-ui/react";
import React from "react";

import FormContact from "../components/FormContact";
import SocialLink from "../ui/list/SocialLink";
interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <>
      <Box
        border="2px solid rgba(0, 0, 0, 1)"
        boxShadow=" 10px 10px 0 rgba(0, 0, 0, 1)"
        mt={10}
        padding={{base: "5px 20px 20px 20px", md: "20px 70px 70px 70px"}}
      >
        <Text as="h2" fontSize={{base: "2xl", md: "3xl"}} fontWeight={"600"} mt={8}>
          Contáctame.
        </Text>
        <Text fontSize={{base: "sm", md: "md"}} mb={14} ml="1" mt={-2}>
          Mantengámonos en contacto,dejame un mensaje
        </Text>
        <FormContact />
      </Box>
      <Box alignItems={"center"} display={"flex"} justifyContent={"center"} mt={14}>
        <SocialLink />
      </Box>
    </>
  );
};

export default Contact;
