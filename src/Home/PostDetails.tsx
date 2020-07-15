import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ScrollView,
  Image,
} from "react-native";
import { Card, CardItem, Body } from "native-base";
import { formatDistance } from "date-fns";

const PostDetails = ({ route }) => {
  const { title, info, date, from, photo } = route.params;

  console.log(photo);

  return (
    <ScrollView
      style={{ backgroundColor: "#fff", height: "100%", padding: 20 }}
    >
      <Image
        source={{
          uri: photo,
        }}
        style={{ height: 200, marginBottom: 20 }}
      />
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          marginBottom: 20,
        }}
      >
        {info}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text>
          Posted by: <Text style={{ fontWeight: "bold" }}>{from}</Text>
        </Text>
        <Text>
          {formatDistance(date, Date.now(), {
            addSuffix: true,
          })}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PostDetails;
