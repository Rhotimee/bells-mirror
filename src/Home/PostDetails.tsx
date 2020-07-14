import React from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { formatDistance } from "date-fns";

const PostDetails = ({ route }) => {
  const { info, date, from } = route.params;

  console.log(info, date, from);
  return (
    <View style={{ backgroundColor: "#fff", height: "100%", padding: 20 }}>
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
        <Text>{from}</Text>
        <Text>
          {formatDistance(date, Date.now(), {
            addSuffix: true,
          })}
        </Text>
      </View>
    </View>
  );
};

export default PostDetails;
