import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { format } from "date-fns";

const PostDetails = ({ route }) => {
  const { title, info, date, from, photo } = route.params;

  return (
    <ScrollView
      style={{ backgroundColor: "#fff", height: "100%", padding: 20 }}
    >
      {photo && (
        <Image
          source={{
            uri: photo,
          }}
          style={{ height: 200, marginBottom: 20 }}
        />
      )}
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            marginBottom: 5,
          }}
        >
          {from}
        </Text>
        <Text>{format(date, "MMMM dd, yyyy hh:mmaaaaa'm'")}</Text>
      </View>
      <Text
        style={{
          marginBottom: 20,
        }}
      >
        {info}
      </Text>
    </ScrollView>
  );
};

export default PostDetails;
