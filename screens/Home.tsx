import {Box, chakra, Grid, Text} from "@chakra-ui/react";
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
import CopyToClipboard from "react-copy-to-clipboard";

import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Button from "../ui/controls/Button";
import Customizable from "../ui/icons/Customizable";
import Link from "../ui/controls/Link";
import {IProject} from "../types";
import NextLink from "../ui/controls/NextLink";
import {useToast} from "../hook/useToast";

interface Props {
  projects: IProject[];
}

const Home: React.FC<Props> = ({projects}) => {
  const toast = useToast();
  const mostImportant = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <Box fontSize="lg" mt={2}>
        <chakra.p>
          Hola! soy Agustin Edgardo Mansilla un desarrollador Fullstack mas enfocado en el Frontend
          con mucha curiosidad y en constante aprendizaje, actualmente estoy desarollando con{" "}
          <Link isExternal href="https://nextjs.org/">
            NextJS
          </Link>{" "}
          un framework de React.
        </chakra.p>
        <chakra.p>
          En este momento estoy en busqueda de mi primer empleo en el area IT. Ademas en mi tiempo
          libre trabajo en desarrollar aplicaciones a conocidos. También paso el tiempo en{" "}
          <CopyToClipboard text="agustinmme#5628">
            <Link
              onClick={() => {
                toast({
                  title: "Discord",
                  description: "Te he copiado mi usuario",
                  status: "success",
                  duration: 2000,
                });
              }}
            >
              Discord
            </Link>
          </CopyToClipboard>
          ,{" "}
          <Link isExternal href="https://twitter.com/agustinmme1">
            Twitter
          </Link>{" "}
          y
          <Link isExternal href="https://www.linkedin.com/in/agustinmme/">
            Linkedin
          </Link>
          donde aprendo y público mis trabajos.
        </chakra.p>
      </Box>

      <Text as="h2" fontSize={{base: "2xl", md: "4xl"}} fontWeight={"600"} my={8}>
        Proyectos.
      </Text>

      {mostImportant.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      <NextLink href="/project">
        <Button m={"auto"} mt="10" size="lg" width={"80%"}>
          ver mas proyectos
        </Button>
      </NextLink>
      <Text as="h2" fontSize={{base: "xl", md: "3xl"}} fontWeight={"600"} my={8}>
        Languages && Tools.
      </Text>
      <Grid gridGap={8} templateColumns="repeat(auto-fill, minmax(120px, 1fr))">
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
