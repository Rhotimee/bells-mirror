import React from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { Center } from "../Center";
import { Card, CardItem, Body } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const Feeds = () => {
  return (
    <Center style={{ padding: 10 }}>
      <FlatList
        style={{ width: "100%" }}
        data={[
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          },
          {
            message:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque exercitationem alias? Aliquam accusantium quia dolorum deserunt beatae alias cum.",
            from: "Registry",
            date: "Feb 2, 2020"
          }
        ]}
        renderItem={({ item: { message, from, date }, index, separators }) => (
          <TouchableOpacity
            onPress={() => {}}
            style={{ width: "100%" }}
            key={index}
          >
            <Card style={{ width: "100%" }}>
              <CardItem>
                <Body>
                  <Text>{message}</Text>
                </Body>
              </CardItem>
              <CardItem
                footer
                style={{ flex: 1, justifyContent: "space-between" }}
              >
                <Text>{from}</Text>
                <Text>{date}</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
        )}
      />
    </Center>
  );
};

export default Feeds;
