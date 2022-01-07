import {Link as LinkChakra, LinkProps} from "@chakra-ui/react";
import React from "react";

const LinkFooter: React.FC<LinkProps> = ({children, ...props}) => {
  return (
    <>
      {" "}
      <LinkChakra
        _hover={{
          textDecoration: "none",
        }}
        color={"secondary.700"}
        fontWeight={"bold"}
        {...props}
      >
        {children}
      </LinkChakra>
    </>
  );
};

export default LinkFooter;
