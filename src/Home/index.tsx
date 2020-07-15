import React, { useState, useEffect } from "react";
import { Text, FlatList } from "react-native";
import { format } from "date-fns";
import { Card, CardItem, Body } from "native-base";

import { Center } from "../Center";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../Firebase";

const Feeds = ({ navigation }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    return db.collection("feeds").onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setState(list);
    });
  }, []);

  return (
    <Center style={{ padding: 10 }}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(_, index) => index.toString()}
        data={state}
        renderItem={({
          item: { title, info, from, date, photo },
          index,
          separators,
        }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("News", {
                title,
                info,
                from,
                date,
                photo,
              });
            }}
            style={{ width: "100%" }}
            key={index}
          >
            <Card style={{ width: "100%" }}>
              <CardItem>
                <Body>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "400",
                    }}
                  >
                    {title}
                  </Text>
                </Body>
              </CardItem>
              <CardItem
                footer
                style={{ flex: 1, justifyContent: "space-between" }}
              >
                <Text
                  style={{
                    fontWeight: "200",
                  }}
                >
                  {from}
                </Text>
                <Text
                  style={{
                    fontWeight: "200",
                  }}
                >
                  {format(date, "MMMM dd, yyyy hh:mmaaaaa'm'")}
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
