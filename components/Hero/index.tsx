import {Box, Heading} from "@chakra-ui/react";
import React from "react";

import LetterLoop from "./LetterLoop";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <>
      {" "}
      <Box display={"flex"} mt="10">
        <Heading fontSize={{base: "4xl", md: "5xl", lg: "6xl"}} fontWeight={"700"}>
          {"Bienvenid"}
        </Heading>
        <LetterLoop />
        <Heading
          fontSize={{base: "4xl", md: "5xl", lg: "6xl"}}
          fontWeight={"700"}
          ml={{base: 6, md: 8, lg: 10}}
        >
          {"!"}
        </Heading>
      </Box>
      <Heading fontSize={{base: "4xl", md: "5xl", lg: "6xl"}} fontWeight={"700"}>
        {"a mi página web"}
      </Heading>
    </>
  );
};

export default Hero;
