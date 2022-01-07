import {FaCode} from "react-icons/fa";
import {IconType} from "react-icons/lib";
import {
  SiNextdotjs,
  SiAndroidstudio,
  SiTypescript,
  SiBootstrap,
  SiJavascript,
  SiJava,
  SiChakraui,
  SiFirebase,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
} from "react-icons/si";

export const getTag = (value: string): [string, IconType] => {
  const DEFAULT_TAG = ["gray", FaCode];
  const SELECT_TAG: Record<string, [string, IconType]> = {
    react: ["blue", SiReact],
    nodejs: ["green", SiNodedotjs],
    chakraui: ["teal", SiChakraui],
    firebase: ["orange", SiFirebase],
    bootstrap: ["purple", SiBootstrap],
    typescript: ["blue", SiTypescript],
    javascript: ["yellow", SiJavascript],
    nextjs: ["gray", SiNextdotjs],
    java: ["orange", SiJava],
    android: ["green", SiAndroidstudio],
    postgresql: ["blue", SiPostgresql],
    sequelize: ["blue", SiSequelize],
  };

  return SELECT_TAG[value] || DEFAULT_TAG;
};
