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

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({
  navigation
}: AuthNavProps<"signup">) => {
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
        <Title style={{ color: "#000" }}>SIGN UP</Title>
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
              title="Sign Up"
              onPress={() => {
                login({ username, password });
              }}
            />
          </View>
        </Form>

        <Center>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signin");
            }}
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text>Have an account? </Text>
            <Text style={{ color: "blue" }}>Sign In</Text>
          </TouchableOpacity>
        </Center>
      </Content>
    </Container>
  );
};

export default SignUp;
