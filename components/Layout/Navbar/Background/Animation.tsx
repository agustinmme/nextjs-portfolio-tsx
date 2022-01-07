import {chakra} from "@chakra-ui/react";
import React from "react";

interface UpDownProps {
  type: "normal" | "wide" | "slow";
}

const UpDown: React.FC<UpDownProps> = ({children, type}) => {
  return (
    <chakra.div
      bottom={0}
      className={
        type === `wide`
          ? `UpDownWideAnimation`
          : type === `slow`
          ? `UpDownSlowAnimation`
          : `UpDownAnimation`
      }
      left={0}
      overflow="hidden"
      position="absolute"
      right={0}
      top={0}
      zIndex={-500}
    >
      {children}
    </chakra.div>
  );
};

export default UpDown;
