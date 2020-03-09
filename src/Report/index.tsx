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

const Report = ({ navigation }) => {
  return (
    <Container style={{ padding: 10 }}>
      <Header transparent>
        <Title style={{ color: "#000" }}>Report</Title>
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
            <Label style={{}}>Text</Label>
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
              placeholder="Options"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              // selectedValue={this.state.selected2}
              // onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="General Suggestion" value="key0" />
              <Picker.Item label="Medical Emergency" value="key1" />
              <Picker.Item label="Sexual Harassment" value="key2" />
              <Picker.Item label="Drug Abuse" value="key3" />
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

export default Report;
