import {Heading, Text, HeadingProps} from "@chakra-ui/react";
import React from "react";

const NavItem: React.FC<HeadingProps> = ({children}) => {
  return (
    <>
      <Heading
        fontSize={"xl"}
        fontWeight={"bold"}
        lineHeight={1.1}
        my={2}
        p={4}
        textTransform={"uppercase"}
      >
        <Text
          _active={{border: "none"}}
          _before={{
            content: "''",
            width: "0px",
            height: "25%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "primary.200",
            zIndex: -1,
            transition: "all .4s ease",
          }}
          _hover={{
            cursor: "pointer",
            _before: {
              width: "full",
            },
          }}
          as={"span"}
          border={"none"}
          position={"relative"}
        >
          {children}
        </Text>
      </Heading>
    </>
  );
};

export default NavItem;
