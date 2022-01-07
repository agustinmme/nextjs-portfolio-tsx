import {Heading, Stack, Text, TagLeftIcon, Tag, TagLabel, Box, Link} from "@chakra-ui/react";
import React from "react";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

import {IProject} from "../../types";

import {getTag} from "./getTag";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({project}) => {
  const tags = project.tags.split(",");

  return (
    <Stack
      bg="white"
      borderRadius="10px"
      borderTop={"6px solid"}
      borderTopColor={"yellow.300"}
      boxShadow="0 10px 10px rgba(0, 0, 0, 0.2)"
      gap={1}
      maxW="full"
      mt={5}
      overflow="hidden"
      p="3"
    >
      <Stack isInline alignItems="center" justifyContent="space-between" width="full">
        <Heading fontSize={{base: "xl", md: "2xl", lg: "4xl"}}>{project.title}</Heading>
        <Stack isInline alignItems="center" justifyContent="flex-end" spacing={4}>
          {project.github && (
            <Link isExternal href={project.github}>
              <FaGithub cursor={"pointer"} size={23} />
            </Link>
          )}
          {project.github2 && (
            <Link isExternal href={project.github2}>
              <FaGithub cursor={"pointer"} size={23} />
            </Link>
          )}
          {project.deploy && (
            <Link isExternal href={project.deploy}>
              <FaExternalLinkAlt cursor={"pointer"} size={20} />
            </Link>
          )}
        </Stack>
      </Stack>

      <Text fontSize={{base: "sm", md: "md", lg: "md"}}>{project.description}</Text>
      <Box mt={-2}>
        {tags.length > 0
          ? tags.map((tag) => {
              return (
                <Tag key={tag} colorScheme={`${getTag(tag)[0]}`} ml={2} mt={2} size={"md"}>
                  <TagLeftIcon as={getTag(tag)[1]} />
                  <TagLabel textTransform={"capitalize"}>{tag}</TagLabel>
                </Tag>
              );
            })
          : null}
      </Box>
    </Stack>
  );
};

export default ProjectCard;
