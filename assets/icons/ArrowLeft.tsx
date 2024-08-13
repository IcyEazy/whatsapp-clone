import { Iconprops } from "@/types";
import React, { FC } from "react";
import { Path, Svg } from "react-native-svg";

const ArrowLeft: FC<Iconprops> = ({ width, height, outlineColor }) => {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5 12H19M5 12L11 18M5 12L11 6"
        stroke={outlineColor || "#151515"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeft;
