import type {GetStaticProps} from "next";

import React from "react";

import {list} from "../libs/paparse";
import Project from "../screens/Project";
import {IProject} from "../types";
interface Props {
  projects: IProject[];
}

const ProjectRoute: React.FC<Props> = ({projects}) => {
  return (
    <>
      <Project projects={projects} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await list();

  return {
    revalidate: 86400,
    props: {
      projects,
    },
  };
};

export default ProjectRoute;
