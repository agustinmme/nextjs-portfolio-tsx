import {chakra} from "@chakra-ui/react";

import icons from "./Icons";

type IconType = "triangle" | "circle" | "hexa" | "box";

type Props = {
  stroke?: boolean;
  color?: string | number | any;
  width: number;
  icon: IconType;
  zIndex?: number;
  left: string;
  top: string;
  hiddenMobile?: boolean;
};

const SVG: React.FC<Props> = ({
  stroke = false,
  color = `yellow.500`,
  zIndex = -500,
  width,
  icon,
  left,
  top,
  hiddenMobile = false,
}) => (
  <chakra.svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? {base: `none`, md: `block`} : `block`,
      overflow: `visible`,
      color,
      zIndex,
      width,
      left,
      top,
      filter: `blur(5px) saturate(160%)`,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </chakra.svg>
);

export default SVG;
