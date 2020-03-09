import React from "react";
import { View } from "react-native";

interface CenterProps {
  children: JSX.Element | JSX.Element[];
  style?: object;
}

export const Center: React.FC<CenterProps> = ({ children, style }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        ...style
      }}
    >
      {children}
    </View>
  );
};
