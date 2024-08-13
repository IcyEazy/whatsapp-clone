import { Iconprops } from "@/types";
import { FC } from "react";
import { Path, Svg } from "react-native-svg";

const ArrowDownFilled: FC<Iconprops> = (props) => {
  return (
    <Svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5L5 5.5L10 0.5H0Z"
        fill={props.fillColor || "#151515"}
      />
    </Svg>
  );
};

export default ArrowDownFilled;
