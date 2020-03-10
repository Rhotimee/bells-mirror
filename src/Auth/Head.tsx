import React from "react";
import { View, Title } from "native-base";
import { Image } from "react-native";

interface HeadProps {
  title: String;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        style={{ margin: 30, height: 150, width: 150 }}
        source={require("../../assets/logo.png")}
      />
      <Title style={{ color: "#000" }}>{title}</Title>
    </View>
  );
};

export default Head;
