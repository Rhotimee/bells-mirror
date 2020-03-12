import React, { useState, useContext } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { AuthNavProps } from "../AuthProps";
import { Center } from "../../Center";
import { Container, Content, Form, Item, Input, Label } from "native-base";
import { AuthContext } from "../AuthProvider";
import Head from "../Head";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({
  navigation
}: AuthNavProps<"signup">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [matric, setMatric] = useState("");

  const { signup } = useContext(AuthContext);

  return (
    <Container
      style={{
        padding: 10,
        flex: 1,
        justifyContent: "center"
      }}
    >
      <Content>
        <Head title="SIGN UP" />
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              style={{ padding: 10 }}
              onChangeText={val => setName(val)}
              value={name}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              style={{ padding: 10 }}
              onChangeText={val => setEmail(val)}
              value={email}
            />
          </Item>
          <Item floatingLabel>
            <Label>Matric Number</Label>
            <Input
              style={{ padding: 10 }}
              onChangeText={val => setMatric(val)}
              value={matric}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              onChangeText={val => setPassword(val)}
              value={password}
              secureTextEntry
            />
          </Item>
          <View style={{ margin: 10 }}>
            <Button
              title="Sign Up"
              onPress={() => {
                signup(email, password, matric, name, "student");
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
            <Text style={{ color: "#0080FF" }}>Sign In</Text>
          </TouchableOpacity>
        </Center>
      </Content>
    </Container>
  );
};

export default SignUp;
