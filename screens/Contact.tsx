import {Box, Text} from "@chakra-ui/react";
import React from "react";

import FormContact from "../components/FormContact";
import SocialLink from "../ui/list/SocialLink";
interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <Box>
      <Text as="h2" fontSize={{base: "2xl", md: "3xl"}} fontWeight={"600"} mt={8}>
        Contáctame.
      </Text>
      <Text fontSize={{base: "sm", md: "md"}} mb={5} ml="1" mt={-2}>
        Mantengámonos en contacto,dejame un mensaje
      </Text>
      <FormContact />
      <Box>
        <Box alignItems={"center"} display={"flex"} justifyContent={"center"} mt="10">
          <SocialLink />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
