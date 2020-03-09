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

interface SignInProps {}

const SignIn: React.FC<SignInProps> = ({
  navigation
}: AuthNavProps<"signin">) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <Container
      style={{
        padding: 10,
        flex: 1,
        justifyContent: "center"
      }}
    >
      <Header transparent style={{ marginTop: 100 }}>
        <Title style={{ color: "#000" }}>SIGN IN</Title>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              style={{ padding: 10 }}
              onChangeText={val => setUsername(val)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input onChangeText={val => setPassword(val)} />
          </Item>
          <View style={{ margin: 10 }}>
            <Button
              title="Login"
              onPress={() => {
                login({ username, password });
              }}
            />
          </View>
        </Form>

        <Center>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("forgotPassword");
            }}
            style={{ margin: 20, flex: 1, flexDirection: "row" }}
          >
            <Text>Forgot password? </Text>
            <Text style={{ color: "blue" }}>Click here</Text>
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

export default SignIn;
