import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, Linking } from "react-native";
import {
  Container,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  Header,
  Toast,
  List,
  ListItem,
  Right,
  Left,
  Textarea,
} from "native-base";
import { Center } from "../Center";
import { db } from "../Firebase";
import { AuthContext } from "../Auth/AuthProvider";
import { AntDesign } from "@expo/vector-icons";

export const Sent = ({ text }) => (
  <Center>
    <Text>{text}</Text>
  </Center>
);

const Report = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState([]);
  const [description, setDescription] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    return db.collection("contacts").onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      const userContacts = list.filter(
        (eachData) => eachData.email === user.email
      );
      setContacts(userContacts);
    });
  }, []);

  return (
    <Container style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 20,
          color: "blue",
          marginBottom: 10,
        }}
        onPress={() => Linking.openURL("https://www.bellsuniversity.edu.ng/")}
      >
        Bells University Website
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "blue",
        }}
        onPress={() => Linking.openURL("https://www.bellsuniversity.edu.ng/")}
      >
        FAQ
      </Text>
      <View>
        <Header transparent></Header>
        <Text
          style={{
            color: "#000",
            fontSize: 20,
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Report Bug
        </Text>
        <Form>
          <Label style={{}}>Bug description</Label>
          <Textarea
            rowSpan={5}
            bordered
            placeholder=""
            underline
            style={{ width: "100%", marginBottom: 20 }}
            value={description}
            onChangeText={(val) => setDescription(val)}
          />
          <Button
            title="Submit"
            onPress={() => {
              Toast.show({
                text: "Bug has been submitted",
              });
            }}
          />
        </Form>
      </View>
    </Container>
  );
};

export default Report;
