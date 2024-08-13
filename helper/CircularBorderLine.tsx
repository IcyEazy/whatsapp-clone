import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

const width = 100;
const RADIUS = width / 4;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircularBorderLine = ({ segments }: { segments: number }) => {
  const segmentAngle = 360 / segments;

  return (
    <View style={styles.container}>
      <Svg height={RADIUS * 2} width={RADIUS * 2}>
        {Array.from({ length: segments }).map((_, index) => (
          <Circle
            key={index}
            cx={RADIUS}
            cy={RADIUS}
            r={RADIUS}
            stroke="#ccc"
            strokeWidth={5}
            strokeDasharray={`${CIRCUMFERENCE / segments} ${CIRCUMFERENCE}`}
            strokeDashoffset={-index * (CIRCUMFERENCE / segments)}
            rotation={-90 + index * segmentAngle}
            origin={`${RADIUS}, ${RADIUS}`}
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CircularBorderLine;
