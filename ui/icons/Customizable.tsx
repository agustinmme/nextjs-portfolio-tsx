import {Box, Icon, Text} from "@chakra-ui/react";
import React from "react";
import {IconType} from "react-icons";

import Tooltip from "../display/Tooltip";

interface Props {
  icon: IconType;
  title?: string;
  size?: number;
  padding?: number;
  onClick?: () => void;
  cursor?: string;
  text?: string;
}

const CustomizableIcon: React.FC<Props> = ({
  icon,
  size = 14,
  padding = 2,
  title,
  onClick,
  cursor,
  text,
}) => {
  return (
    <Tooltip aria-label={`${title}`} label={text}>
      <Box
        align="center"
        bg={"white"}
        border="2px solid"
        color={"secondary.800"}
        cursor={cursor}
        justifyContent={"center"}
        m={"auto"}
        px={padding * 2}
        py={padding}
        onClick={onClick}
      >
        <Box bg={"black"} p={2}>
          <Icon as={icon} color="yellow.200" h={size} mb={-2} w={size} />
        </Box>

        <Text color="black" fontSize={"sm"} mt={2}>
          {title}
        </Text>
      </Box>
    </Tooltip>
  );
};

export default CustomizableIcon;
