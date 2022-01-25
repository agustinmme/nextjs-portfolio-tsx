import type {GetStaticProps} from "next";

import React from "react";

import {list} from "../libs/paparse";
import Projects from "../screens/Projects";
import {IProject} from "../types";

interface Props {
  projects: IProject[];
}

const ProjectRoute: React.FC<Props> = ({projects}) => {
  return (
    <>
      <Projects data={projects} />
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
