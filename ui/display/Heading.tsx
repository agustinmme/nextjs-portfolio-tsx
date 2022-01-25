import {Heading as ChakraHeading, HeadingProps} from "@chakra-ui/react";
import React from "react";

const Heading: React.FC<HeadingProps> = ({children, ...props}) => {
  return (
    <ChakraHeading
      border="2px solid rgba(0, 0, 0, 1)"
      boxShadow=" 10px 10px 0 rgba(0, 0, 0, 1)"
      pl={4}
      py={2}
      {...props}
    >
      {children}
    </ChakraHeading>
  );
};

export default Heading;
