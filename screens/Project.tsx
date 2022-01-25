import {
  AspectRatio,
  Box,
  Divider,
  Link,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {FaExternalLinkAlt} from "react-icons/fa";
import {SiGithub} from "react-icons/si";

import {IProject} from "../types";
import Button from "../ui/controls/Buttons";
import Heading from "../ui/display/Heading";
import Subheading from "../ui/display/Subheading";
import {getTag} from "../util/getTag";
import {libreries} from "../util/libreries";

interface Props {
  data: IProject;
}

const Project: React.FC<Props> = ({data}) => {
  const tags = data.tags.split(",");
  const lib = data.lib.split(",");

  return (
    <>
      <Stack gap={5} mt={10}>
        <Heading fontSize={{base: "3xl", md: "4xl"}}>{data.title}</Heading>
        <Box overflow={"hidden"} position={"relative"}>
          <Box display={{base: "none", md: "flex"}} position={"absolute"} w={"100%"}>
            <Box
              boxShadow={"lg"}
              filter="blur(5px)"
              h={{base: 300, md: 500}}
              mx={"auto"}
              overflow={"hidden"}
              p={5}
              position={"relative"}
              w={"100%"}
            >
              <Image
                priority
                alt={`Vista previa del proyecto ${data.title}`}
                layout="fill"
                src={`${process.env.NEXT_PUBLIC_IMAGE_GIF}${data.image}`}
              />
            </Box>
          </Box>
          <Box
            boxShadow={"lg"}
            h={{base: 300, md: 500}}
            mx={"auto"}
            overflow={"hidden"}
            p={5}
            position={"relative"}
            w={{base: "100%", md: "70%"}}
            zIndex={2}
          >
            <Image
              priority
              alt={`Vista previa del proyecto blur`}
              layout="fill"
              src={`${process.env.NEXT_PUBLIC_IMAGE_GIF}${data.image}`}
            />
          </Box>
        </Box>

        <Box>
          Links :{" "}
          {data.github && (
            <Link isExternal _hover={{textDecoration: "none"}} href={data.github}>
              <Button leftIcon={<SiGithub />} size={"xs"}>
                Frontend
              </Button>
            </Link>
          )}
          {data.github2 && (
            <Link isExternal _hover={{textDecoration: "none"}} href={data.github2}>
              <Button leftIcon={<SiGithub />} size={"xs"}>
                Backend
              </Button>
            </Link>
          )}
          {data.deploy && (
            <Link isExternal _hover={{textDecoration: "none"}} href={data.deploy}>
              <Button leftIcon={<FaExternalLinkAlt />} size={"xs"}>
                Deploy
              </Button>
            </Link>
          )}
        </Box>
        <Divider />
        <Subheading>Descripción</Subheading>
        <Text fontSize="lg" ml={5} textAlign={"justify"}>
          {data.description}
        </Text>

        {tags[1] !== "android" ? <Subheading>Tech Stack</Subheading> : null}

        <Text
          display={tags[1] !== "android" ? "flex" : "none"}
          fontSize="lg"
          ml={5}
          textAlign={"justify"}
        >
          Este proyecto fue desarrollado usando {tags[0] === "nextjs" ? "NextJS" : "Vite"} para un
          sitio web más ágil y ofreciendo una interfaz rápida y fácil de usar. Decidí usar{" "}
          {tags[3] === "bootstrap" ? "Bootstrap" : "ChakraUI"} para este sitio para una mejor
          apariencia y facilidad de mantenimiento.
        </Text>
        {lib.length > 1 ? (
          <Box>
            <Text
              display={tags[1] !== "android" ? "flex" : "none"}
              fontSize="lg"
              mb={4}
              textAlign={"justify"}
            >
              Tambien se utilizaron algunas librerias como :
            </Text>
            <Stack gap={1} ml={3}>
              {lib.map((lib) => {
                return <Text key={lib}>{"> " + lib.toUpperCase() + " : " + libreries(lib)}</Text>;
              })}
            </Stack>
          </Box>
        ) : null}
        <Box display={tags[1] !== "android" ? "flex" : "none"}>
          {tags.length > 0
            ? tags.map((tag) => {
                return (
                  <Tag key={tag} colorScheme={`${getTag(tag)[0]}`} ml={2} mt={2}>
                    <TagLeftIcon as={getTag(tag)[1]} size={"xs"} />
                    <TagLabel fontSize={"xs"} textTransform={"capitalize"}>
                      {tag}
                    </TagLabel>
                  </Tag>
                );
              })
            : null}
        </Box>
        <Subheading>App Demo</Subheading>
        <AspectRatio maxW="5xl" ratio={1}>
          <iframe
            allowFullScreen
            src={`https://www.youtube.com/embed/${data.video}`}
            title={"Video de " + data.title}
          />
        </AspectRatio>
      </Stack>
    </>
  );
};

export default Project;
