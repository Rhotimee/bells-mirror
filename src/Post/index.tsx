import React from "react";
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
  Picker,
  Icon,
  Textarea
} from "native-base";
import { Center } from "../Center";

const Post = ({ navigation }) => {
  return (
    <Container style={{ padding: 10 }}>
      <Header transparent>
        <Title style={{ color: "#000" }}>Post Information</Title>
      </Header>
      <Content>
        <Form>
          <Item
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <Label style={{}}>Info</Label>
            <Textarea
              rowSpan={5}
              bordered
              placeholder=""
              underline
              style={{ width: "100%", marginBottom: 20 }}
            />
          </Item>
          <Item picker style={{ marginBottom: 20 }}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Send to"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              // selectedValue={this.state.selected2}
              // onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
          <View style={{ margin: 10 }}>
            <Button title="Submit" onPress={() => {}} />
          </View>
        </Form>
      </Content>
    </Container>
  );
};

export default Post;
