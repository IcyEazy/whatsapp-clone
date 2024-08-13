// import React from "react";
// import { View, StyleSheet } from "react-native";

// const StatusBorderLine = ({ lines }: { lines: number }) => {
//   return (
//     <View style={styles.container}>
//       {Array.from({ length: lines }).map((_, index) => (
//         <View key={index} style={styles.line} />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//     padding: 10,
//   },
//   line: {
//     flex: 1,
//     height: 2,
//     backgroundColor: "#ccc",
//     marginHorizontal: 2,
//   },
// });

// export default StatusBorderLine;

import React from "react";
import { View, StyleSheet } from "react-native";

const StatusBorderLine = ({ lines }: { lines: number }) => {
  const linesArray = Array.from({ length: lines }, (_, i) => i);

  return (
    <View style={styles.container}>
      <View style={styles.border} />
      {linesArray.map((_, index) => (
        <View
          key={index}
          style={[
            styles.line,
            {
              transform: [
                {
                  rotate: `${(360 / lines) * index}deg`,
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    position: "relative",
  },
  border: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "green",
    position: "absolute",
    top: -2,
    left: -2,
  },
  line: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "transparent",
    position: "absolute",
    top: -2,
    left: -2,
  },
});

export default StatusBorderLine;
