import { Iconprops } from "@/types";
import { FC } from "react";
import { Path, Svg } from "react-native-svg";

const More: FC<Iconprops> = (props) => {
  return (
    <Svg
      onPress={props?.onClick}
      width={props.width || "5"}
      height={props.height || "18"}
      viewBox="0 0 5 18"
      fill="none"
    >
      <Path
        d="M3.58203 2.33301C3.58203 3.02336 3.02239 3.58301 2.33203 3.58301C1.64168 3.58301 1.08203 3.02336 1.08203 2.33301C1.08203 1.64265 1.64168 1.08301 2.33203 1.08301C3.02239 1.08301 3.58203 1.64265 3.58203 2.33301Z"
        fill="#571244"
      />
      <Path
        d="M3.58203 8.99967C3.58203 9.69003 3.02239 10.2497 2.33203 10.2497C1.64168 10.2497 1.08203 9.69003 1.08203 8.99967C1.08203 8.30932 1.64168 7.74967 2.33203 7.74967C3.02239 7.74967 3.58203 8.30932 3.58203 8.99967Z"
        fill="#571244"
      />
      <Path
        d="M2.33203 16.9163C3.02239 16.9163 3.58203 16.3567 3.58203 15.6663C3.58203 14.976 3.02239 14.4163 2.33203 14.4163C1.64168 14.4163 1.08203 14.976 1.08203 15.6663C1.08203 16.3567 1.64168 16.9163 2.33203 16.9163Z"
        fill="#571244"
      />
      <Path
        d="M3.58203 2.33301C3.58203 3.02336 3.02239 3.58301 2.33203 3.58301C1.64168 3.58301 1.08203 3.02336 1.08203 2.33301C1.08203 1.64265 1.64168 1.08301 2.33203 1.08301C3.02239 1.08301 3.58203 1.64265 3.58203 2.33301Z"
        stroke="#571244"
      />
      <Path
        d="M3.58203 8.99967C3.58203 9.69003 3.02239 10.2497 2.33203 10.2497C1.64168 10.2497 1.08203 9.69003 1.08203 8.99967C1.08203 8.30932 1.64168 7.74967 2.33203 7.74967C3.02239 7.74967 3.58203 8.30932 3.58203 8.99967Z"
        stroke="#571244"
      />
      <Path
        d="M2.33203 16.9163C3.02239 16.9163 3.58203 16.3567 3.58203 15.6663C3.58203 14.976 3.02239 14.4163 2.33203 14.4163C1.64168 14.4163 1.08203 14.976 1.08203 15.6663C1.08203 16.3567 1.64168 16.9163 2.33203 16.9163Z"
        stroke="#571244"
      />
    </Svg>
  );
};

export default More;
