import React from "react";
import {Button as ChakraButton, ButtonProps} from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({children, ...props}) => (
  <ChakraButton
    _active={{
      backgroundColor: "primary.100",
    }}
    _focus={{
      outline: "none",
      backgroundColor: "primary.100",
    }}
    _hover={{
      backgroundColor: "primary.100",
      color: "black",
    }}
    background="white"
    color="black"
    fontWeight="bold"
    height="auto"
    px={2}
    py={1}
    rounded={"lg"}
    textTransform="uppercase"
    transform="translate3d(0,0,0)"
    transition="all 0.7s ease-out"
    {...props}
  >
    {children}
  </ChakraButton>
);
export default Button;
