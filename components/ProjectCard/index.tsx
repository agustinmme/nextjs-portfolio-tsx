import {Heading, Stack, Text, TagLeftIcon, Tag, TagLabel, Box} from "@chakra-ui/react";
import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";
import {FaArrowRight} from "react-icons/fa";

import {IProject} from "../../types";
import {getTag} from "../../util/getTag";

interface Props {
  project: IProject;
  side: boolean;
}

const ProjectCard: React.FC<Props> = ({project, side}) => {
  const tags = project.tags.split(",");
  const router = useRouter();

  const handlerClick = () => {
    router.push(`./project/${project.id}`);
  };

  return (
    <Box
      _hover={{boxShadow: "lg", transform: "scale(1.10)", bg: "secondary.50"}}
      cursor={"pointer"}
      display="flex"
      flexDirection={{base: "column", lg: side ? "row" : "row-reverse"}}
      justifyContent="space-between"
      rounded={"md"}
      transform="scale(1.0)"
      transition={"0.2s ease-in-out"}
      onClick={handlerClick}
    >
      <Box
        alignItems="center"
        display="flex"
        flex="1"
        my={{base: 14, md: "none"}}
        overflow={"hidden"}
        position={"relative"}
      >
        <Box display={{base: "none", md: "flex"}} position={"absolute"} w={"100%"}>
          <Box
            boxShadow={"lg"}
            filter="blur(5px)"
            height={{base: 300, md: 450, lg: 350}}
            m="auto"
            overflow={"hidden"}
            position={"relative"}
            width={{base: "100%", md: "65%", lg: "96%"}}
          >
            <Image
              priority
              alt={`Vista previa del proyecto ${project.title}`}
              layout="fill"
              src={`${process.env.NEXT_PUBLIC_IMAGE_PREVIEW}${project.image}`}
            />
          </Box>
        </Box>
        <Box
          boxShadow={"lg"}
          height={{base: 300, md: 450, lg: 350}}
          mx={"auto"}
          overflow={"hidden"}
          p={5}
          position={"relative"}
          rounded={"lg"}
          w={{base: "100%", md: "75%"}}
          zIndex={2}
        >
          <Image
            priority
            alt={`Vista previa del proyecto blur`}
            layout="fill"
            src={`${process.env.NEXT_PUBLIC_IMAGE_PREVIEW}${project.image}`}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{base: "3", sm: "0"}}
        p={5}
      >
        <Heading fontWeight={600} lineHeight={1.1} size={"lg"}>
          <Text
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "primary.200",
              zIndex: -1,
            }}
            as={"span"}
            position={"relative"}
          >
            {project.title}
          </Text>
        </Heading>
        <Text as="p" color={"gray.700"} fontSize="sm" marginTop="2">
          {project.description}
        </Text>
        <Box mt={2}>
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
        <Stack isInline mt="5">
          <Stack isInline alignItems="center" justifyContent="flex-end" spacing={{base: 1, md: 4}}>
            <Heading fontSize={"lg"}> Ver</Heading>
            <FaArrowRight />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
