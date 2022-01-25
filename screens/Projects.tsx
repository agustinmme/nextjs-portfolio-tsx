import {Box, Text, useDisclosure, VStack} from "@chakra-ui/react";
import React from "react";
import {FaFilter} from "react-icons/fa";

import Pagination from "../components/Pagination";
import ProjectCard from "../components/ProjectCard";
import usePagination from "../hook/usePagination";
import {IProject} from "../types";
import Heading from "../ui/display/Heading";

interface Props {
  data: IProject[];
}

const Projects: React.FC<Props> = ({data}) => {
  const [projects, setProjects] = React.useState<IProject[]>(data);
  const pagination = usePagination(projects, 5);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const words = process.env.NEXT_PUBLIC_FILTER;
  const handlerFilter = (tag: string) => {
    pagination.jump(1);
    if ("todos" === tag) {
      setProjects(data);
      onClose();

      return;
    }
    if ("orm" === tag) {
      setProjects(data.filter((elem) => elem.tags.includes("sequelize")));
      onClose();

      return;
    }
    if ("java" === tag) {
      setProjects(data.filter((elem) => elem.tags.includes("android")));
      onClose();

      return;
    }

    setProjects(data.filter((elem) => elem.tags.includes(tag)));
    onClose();
  };

  const isOdd = (n: number) => {
    return n % 2 == 1;
  };

  return (
    <>
      <Box position={"relative"}>
        <Heading
          boxShadow={isOpen ? "null" : "10px 10px 0 rgba(0, 0, 0, 1)"}
          my={8}
          transition={"all 0.5s ease-out"}
        >
          {"Mis Proyectos."}
        </Heading>

        <VStack
          bg={"white"}
          border={"4px solid"}
          boxShadow={"lg"}
          color={"black"}
          display={isOpen ? "flex" : "none"}
          flexDirection="column"
          left={0}
          m={1}
          p={2}
          pb={4}
          pos="absolute"
          right={0}
          shadow="sm"
          spacing={3}
          top={0}
          zIndex={2}
        >
          {words?.split(",").map((elem) => (
            <Text
              key={elem}
              _hover={{color: "primary.300"}}
              cursor={"pointer"}
              fontSize={"xl"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              onClick={() => handlerFilter(elem)}
            >
              {elem}
            </Text>
          ))}
        </VStack>

        <Box
          cursor={"pointer"}
          position={"absolute"}
          right={5}
          top={5}
          zIndex={2}
          onClick={() => (!isOpen ? onOpen() : onClose())}
        >
          <FaFilter color="gray.300" />
        </Box>
      </Box>

      {pagination.currentData().map((project, index) => (
        <ProjectCard key={index} project={project} side={isOdd(index)} />
      ))}

      {pagination.maxPage > 1 ? (
        <Pagination
          back={pagination.back}
          currentPage={pagination.currentPage}
          maxPage={pagination.maxPage}
          next={pagination.next}
        />
      ) : null}
    </>
  );
};

export default Projects;
