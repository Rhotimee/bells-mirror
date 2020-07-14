import React, { useState, useContext } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { AuthNavProps } from "../AuthProps";
import { Center } from "../../Center";
import { Container, Content, Form, Item, Input, Label } from "native-base";
import { AuthContext } from "../AuthProvider";
import Head from "../Head";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = ({
  navigation,
}: AuthNavProps<"signin">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <Container
      style={{
        padding: 10,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#89CFF0",
      }}
    >
      <Content>
        <Head title="SIGN IN" />
        <Form
          style={{
            marginTop: 20,
          }}
        >
          <Item
            rounded
            style={{
              marginBottom: 10,
            }}
          >
            <Label
              style={{
                marginLeft: 10,
              }}
            >
              Email:
            </Label>
            <Input
              style={{ padding: 10 }}
              onChangeText={(val) => setEmail(val)}
              value={email}
            />
          </Item>
          <Item
            rounded
            style={{
              marginBottom: 10,
            }}
          >
            <Label
              style={{
                marginLeft: 10,
              }}
            >
              Password:
            </Label>
            <Input
              secureTextEntry
              value={password}
              onChangeText={(val) => setPassword(val)}
            />
          </Item>
          <View style={{ margin: 20 }}>
            <Button
              title="Login"
              onPress={() => {
                login(email, password);
              }}
            />
          </View>
        </Form>

        <Center>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("forgotPassword");
            }}
            style={{ margin: 10, flex: 1, flexDirection: "row" }}
          >
            <Text>Forgot password? </Text>
            <Text style={{ color: "#0080FF" }}>Click here</Text>
          </TouchableOpacity>
        </Center>
        <Center>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup");
            }}
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Text>Don't have an account? </Text>
            <Text style={{ color: "#0080FF" }}>Signup</Text>
          </TouchableOpacity>
        </Center>
      </Content>
    </Container>
  );
};

export default SignIn;
