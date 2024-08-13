import { Iconprops } from "@/types";
import { FC } from "react";
import { Path, Svg } from "react-native-svg";

const ArrowRight: FC<Iconprops> = (props) => {
  return (
    <Svg
      onPress={props?.onClick}
      className={props?.customStyle}
      width={props.width || "18"}
      height={props.height || "18"}
      viewBox="0 0 18 18"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3528 4.91498C11.0599 4.62209 10.5851 4.62209 10.2922 4.91498C9.99929 5.20788 9.99929 5.68275 10.2922 5.97564L13.5644 9.24786H2.625C2.21079 9.24786 1.875 9.58365 1.875 9.99786C1.875 10.4121 2.21079 10.7479 2.625 10.7479H13.5643L10.2922 14.02C9.99929 14.3129 9.99929 14.7877 10.2922 15.0806C10.5851 15.3735 11.0599 15.3735 11.3528 15.0806L15.9053 10.5281C16.046 10.3875 16.125 10.1967 16.125 9.99781C16.125 9.7989 16.046 9.60813 15.9053 9.46748L11.3528 4.91498Z"
        fill={props.outlineColor || "#571244"}
      />
    </Svg>
  );
};

export default ArrowRight;
