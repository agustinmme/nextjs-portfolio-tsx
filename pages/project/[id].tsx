import {ParsedUrlQuery} from "querystring";

import * as React from "react";
import {GetStaticPaths, GetStaticProps} from "next";

import {selectById, list} from "../../libs/paparse";
import Project from "../../screens/Project";
import {IProject} from "../../types";

interface Props {
  project: IProject[];
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const ProjectRoute: React.FC<Props> = ({project}) => {
  return <Project data={project[0]} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {id} = context.params as Params;
  const project = await selectById(id);

  return {
    revalidate: 86400,
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await list();

  return {
    paths: projects.map((project) => ({params: {id: project.id}})),
    fallback: false,
  };
};

export default ProjectRoute;
