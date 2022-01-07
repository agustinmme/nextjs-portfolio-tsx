import {Text, TextProps} from "@chakra-ui/react";
import React from "react";

const Logo: React.FC<TextProps> = ({...props}) => {
  return (
    <Text
      _before={{
        content: "''",
        width: "full",
        height: "30%",
        position: "absolute",
        bottom: 3,
        left: 0,
        bg: "primary.100",
        transform: "rotate(-5deg)",
        zIndex: -1,
      }}
      _hover={{
        transform: "rotate(10deg)",
      }}
      as={"span"}
      cursor={"pointer"}
      fontSize={"2xl"}
      fontWeight={"500"}
      my={"auto"}
      position={"relative"}
      transition="all .4s ease"
      {...props}
    >
      {"<AEM/>"}
    </Text>
  );
};

export default Logo;
