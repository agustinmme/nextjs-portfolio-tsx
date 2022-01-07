import {Link as LinkChakra, LinkProps} from "@chakra-ui/react";
import React from "react";

const Link: React.FC<LinkProps> = ({children, ...props}) => {
  const primary = "FEFCBF";

  return (
    <>
      {" "}
      <LinkChakra
        _focus={{
          outline: "none",
          background: `#${primary}`,
          color: "black",
        }}
        _hover={{
          color: "black",
          boxShadow: `inset 0 -2em 0 #${primary}`,
        }}
        borderBottom={`.3em solid #${primary}`}
        boxShadow={`inset 0 -0.05em 0 #${primary}`}
        px={1}
        target="_blank"
        textDecoration={"none"}
        transition={
          "box-shadow 270ms cubic-bezier(0.77, 0, 0.175, 1), color 270ms cubic-bezier(0.77, 0, 0.175, 1)"
        }
        {...props}
      >
        {children}
      </LinkChakra>
    </>
  );
};

export default Link;
