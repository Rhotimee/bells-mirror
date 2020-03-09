import React, { useState, useContext } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { AuthNavProps } from "../AuthProps";
import { Center } from "../../Center";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title
} from "native-base";
import { AuthContext } from "../AuthProvider";

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  navigation
}: AuthNavProps<"forgotPassword">) => {
  const [username, setUsername] = useState("");

  return (
    <Container
      style={{
        padding: 10,
        flex: 1,
        justifyContent: "center"
      }}
    >
      <Header transparent style={{ marginTop: 100 }}>
        <Title style={{ color: "#000" }}>FORGOT PASSWORD</Title>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={val => setUsername(val)} />
          </Item>
          <View style={{ margin: 10 }}>
            <Button title="Submit" onPress={() => {}} />
          </View>
        </Form>

        <Center>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signin");
            }}
            style={{ margin: 20, flex: 1, flexDirection: "row" }}
          >
            <Text>Have an account? </Text>
            <Text style={{ color: "blue" }}>Login</Text>
          </TouchableOpacity>
        </Center>
        <Center>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup");
            }}
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text>Don't have an account? </Text>
            <Text style={{ color: "blue" }}>Signup</Text>
          </TouchableOpacity>
        </Center>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
