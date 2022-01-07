import {Text} from "@chakra-ui/react";
import React from "react";

import Pagination from "../components/Pagination";
import ProjectCard from "../components/ProjectCard";
import usePagination from "../hook/usePagination";
import {IProject} from "../types";

interface Props {
  projects: IProject[];
}

const Project: React.FC<Props> = ({projects}) => {
  const pagination = usePagination(projects, 5);

  return (
    <>
      <Text as="h2" fontSize={{base: "2xl", md: "3xl"}} fontWeight={"600"} my={8}>
        Mis proyectos.
      </Text>

      {pagination.currentData().map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      <Pagination
        back={pagination.back}
        currentPage={pagination.currentPage}
        maxPage={pagination.maxPage}
        next={pagination.next}
      />
    </>
  );
};

export default Project;
