import {Box, Icon, Text} from "@chakra-ui/react";
import React from "react";
import {IconType} from "react-icons";

interface Props {
  icon: IconType;
  title?: string;
  size?: number;
  padding?: number;
  onClick?: () => void;
  cursor?: string;
}

const CustomizableIcon: React.FC<Props> = ({
  icon,
  size = 16,
  padding = 3,
  title,
  onClick,
  cursor,
}) => {
  return (
    <Box
      align="center"
      bg={"primary.200"}
      borderRadius="lg"
      color={"secondary.800"}
      cursor={cursor}
      justifyContent={"center"}
      m={"auto"}
      px={padding * 2}
      py={padding}
      onClick={onClick}
    >
      <Box>
        <Icon as={icon} h={size} p={2} w={size} />
        <Text fontSize={"sm"}>{title}</Text>
      </Box>
    </Box>
  );
};

export default CustomizableIcon;
