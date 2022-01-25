import {Box, Grid, Button} from "@chakra-ui/react";
import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Customizable from "../ui/icons/Customizable";
import {IProject} from "../types";
import NextLink from "../ui/controls/NextLink";
import Heading from "../ui/display/Heading";

interface Props {
  projects: IProject[];
}

const Home: React.FC<Props> = ({projects}) => {
  const mostImportant = projects.slice(0, 3);

  const isOdd = (n: number) => {
    return n % 2 == 1;
  };

  return (
    <>
      <Hero />

      <Heading mb={8} mt={16}>
        Proyectos.
      </Heading>

      {mostImportant.map((project, index) => (
        <ProjectCard key={index} project={project} side={isOdd(index)} />
      ))}
      <Box alignItems="center" display="flex" justifyContent="center" my={14}>
        <NextLink href="/projects">
          <Button
            _active={{color: "black", bg: "primary.200"}}
            _hover={{color: "black", bg: "primary.200"}}
            color={"black"}
            mx={"auto"}
            size={"lg"}
            variant={"ghost"}
          >
            Ver mas projectos
          </Button>
        </NextLink>
      </Box>
      <Heading my={8}>Languages && Tools.</Heading>
      <Grid gridGap={8} p={2} templateColumns="repeat(auto-fill, minmax(120px, 1fr))">
        <Customizable icon={SiNextdotjs} title={"NextJS"} />
        <Customizable icon={SiTypescript} title={"Typescript"} />
        <Customizable icon={SiChakraui} title={"ChakraUI"} />
        <Customizable icon={SiHtml5} title={"Html"} />
        <Customizable icon={SiCss3} title={"Css"} />
        <Customizable icon={SiReact} title={"React"} />
        <Customizable icon={SiNodedotjs} title={"Node"} />
        <Customizable icon={SiGithub} title={"Github"} />
      </Grid>
    </>
  );
};

export default Home;
