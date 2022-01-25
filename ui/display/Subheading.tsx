import {Box, Flex, Heading as ChakraHeading, HeadingProps} from "@chakra-ui/react";
import React from "react";

const Subheading: React.FC<HeadingProps> = ({children, ...props}) => {
  return (
    <Flex bg="white" maxW="sm" mx="auto" overflow="hidden" w="full">
      <Flex alignItems="center" bg="yellow.300" justifyContent="center" w={2} />

      <Box mx={-3} px={4} py={1}>
        <Box mx={3}>
          <ChakraHeading as={"h3"} {...props} color={"black"} fontSize="3xl" fontWeight="bold">
            {children}
          </ChakraHeading>
        </Box>
      </Box>
    </Flex>
  );
};

export default Subheading;
