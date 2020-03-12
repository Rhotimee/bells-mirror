import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { Center } from "../Center";
import { Card, CardItem, Body } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../Firebase";

const Feeds = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    db.collection("feeds")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        setState(data);
      });
  }, []);
  return (
    <Center style={{ padding: 10 }}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(_, index) => index.toString()}
        data={state}
        renderItem={({ item: { info, from, date }, index, separators }) => (
          <TouchableOpacity
            onPress={() => {}}
            style={{ width: "100%" }}
            key={index}
          >
            <Card style={{ width: "100%" }}>
              <CardItem>
                <Body>
                  <Text>{info}</Text>
                </Body>
              </CardItem>
              <CardItem
                footer
                style={{ flex: 1, justifyContent: "space-between" }}
              >
                <Text>{from}</Text>
                <Text>
                  {formatDistance(date, Date.now(), {
                    addSuffix: true
                  })}
                </Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
        )}
      />
    </Center>
  );
};

export default Feeds;
