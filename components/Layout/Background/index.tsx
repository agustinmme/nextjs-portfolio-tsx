import React from "react";

import UpDown from "./Animation";
import SVG from "./SVG";

interface Props {}

const Background: React.FC<Props> = () => {
  return (
    <>
      <UpDown type="normal">
        <SVG stroke color="secondary.500" icon="triangle" left="10%" top="20%" width={48} />
        <SVG stroke color="secondary.500" icon="hexa" left="60%" top="70%" width={48} />

        <SVG color="secondary.500" icon="box" left="60%" top="15%" width={6} />
      </UpDown>
      <UpDown type="wide">
        <SVG stroke color="primary.300" icon="triangle" left="65%" top="8%" width={24} />

        <SVG stroke color="primary.300" icon="triangle" left="90%" top="50%" width={12} />

        <SVG stroke color="primary.300" icon="triangle" left="30%" top="65%" width={16} />
      </UpDown>
      <UpDown type="slow">
        <SVG hiddenMobile color="primary.300" icon="circle" left="85%" top="25%" width={20} />
        <SVG hiddenMobile stroke color="primary.300" icon="circle" left="5%" top="70%" width={24} />
        <SVG color="secondary.500" icon="circle" left="4%" top="20%" width={6} />
        <SVG color="secondary.500" icon="circle" left="50%" top="60%" width={12} />
      </UpDown>
    </>
  );
};

export default Background;
