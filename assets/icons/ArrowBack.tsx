import { Iconprops } from "@/types";
import { FC } from "react";
import { Path, Svg } from "react-native-svg";

const ArrowBack: FC<Iconprops> = (props) => {
  return (
    <Svg
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M9 11L5 15M5 15L9 19M5 15H16C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 9.93913 19.5786 8.92172 18.8284 8.17157C18.0783 7.42143 17.0609 7 16 7H15"
        stroke={props.outlineColor || "#4893D9"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowBack;
