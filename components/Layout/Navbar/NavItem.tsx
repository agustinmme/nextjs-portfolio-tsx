import {Heading, Text} from "@chakra-ui/react";
import React from "react";

interface Props {
  onClose: () => void;
}

const NavItem: React.FC<Props> = ({onClose, children}) => {
  return (
    <>
      <Heading
        fontSize={"5xl"}
        fontWeight={"bold"}
        lineHeight={1.1}
        my={2}
        p={4}
        textTransform={"uppercase"}
      >
        <Text
          _before={{
            content: "''",
            width: "0px",
            height: "25%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "primary.100",
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
          position={"relative"}
          onClick={onClose}
        >
          {children}
        </Text>
      </Heading>
    </>
  );
};

export default NavItem;
