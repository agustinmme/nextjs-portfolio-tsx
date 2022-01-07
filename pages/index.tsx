import type {GetStaticProps} from "next";

import React from "react";

import Home from "../screens/Home";
import {IProject} from "../types";
import {list} from "../libs/paparse";

interface Props {
  projects: IProject[];
}

const HomeRoute: React.FC<Props> = ({projects}) => {
  return (
    <>
      <Home projects={projects} />
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
export default HomeRoute;
