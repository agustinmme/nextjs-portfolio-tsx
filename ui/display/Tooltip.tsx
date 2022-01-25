import {Tooltip as ChakraTooltip, TooltipProps} from "@chakra-ui/react";
import React from "react";

const Tooltip: React.FC<TooltipProps> = ({children, ...props}) => {
  return (
    <ChakraTooltip bg={"primary.200"} border={"2px solid"} color="black" {...props}>
      {children}
    </ChakraTooltip>
  );
};

export default Tooltip;
