import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
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
      <Header transparent>
        <Title style={{ color: "#000" }}>Add an emergency contact</Title>
      </Header>
      <Content>
        <Form>
          <Item
            floatingLabel
            style={{
              padding: 5,
            }}
          >
            <Label>Name</Label>
            <Input
              value={name}
              onChangeText={(val) => {
                setName(val);
              }}
            />
          </Item>
          <Item
            floatingLabel
            style={{
              padding: 5,
            }}
          >
            <Label>Phone Number</Label>
            <Input
              value={phoneNumber}
              onChangeText={(val: any) => {
                setPhoneNumber(val);
              }}
            />
          </Item>

          <View style={{ margin: 10 }}>
            <Button
              title="Submit"
              onPress={() => {
                db.collection("contacts")
                  .add({
                    email: user.email,
                    name,
                    phoneNumber,
                  })
                  .then(() => {
                    Toast.show({
                      text: "Contact has been saved",
                    });
                  });
              }}
            />
          </View>
        </Form>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Header transparent>
            <Title style={{ color: "#000" }}>Emergency contact List</Title>
          </Header>
          <Content>
            <List>
              {contacts.map((contact) => (
                <ListItem>
                  <Left
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text>{contact.name}</Text>
                    <Text>{contact.phoneNumber}</Text>
                  </Left>
                  <Right>
                    <TouchableOpacity
                      onPress={async () => {
                        console.log("hi");
                        await db
                          .collection("contacts")
                          .doc(contact.id)
                          .delete()
                          .then(() => {
                            console.log("User deleted!");
                            Toast.show({
                              text: "Contact has been deleted",
                            });
                          });
                      }}
                    >
                      <AntDesign name="delete" size={24} color="red" />
                    </TouchableOpacity>
                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>
        </View>
      </Content>
    </Container>
  );
};

export default Report;
