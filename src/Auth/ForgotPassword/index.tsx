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
  Title,
} from "native-base";
import { AuthContext } from "../AuthProvider";
import Head from "../Head";

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  navigation,
}: AuthNavProps<"forgotPassword">) => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useContext(AuthContext);

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
        <Head title="FORGOT PASSWORD" />
        <Form
          style={{
            marginTop: 20,
          }}
        >
          <Item rounded>
            <Label
              style={{
                marginLeft: 10,
              }}
            >
              Email:
            </Label>
            <Input onChangeText={(val) => setEmail(val)} value={email} />
          </Item>
          <View style={{ margin: 10 }}>
            <Button title="Submit" onPress={() => forgotPassword(email)} />
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
            <Text style={{ color: "#0080FF" }}>Login</Text>
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

export default ForgotPassword;
