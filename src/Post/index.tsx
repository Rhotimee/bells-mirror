import React, { useState, useContext } from "react";
import { View, Button } from "react-native";
import {
  Container,
  Title,
  Content,
  Form,
  Item,
  Label,
  Header,
  Picker,
  Icon,
  Textarea,
  Toast
} from "native-base";
import { db } from "../Firebase";
import { AuthContext } from "../Auth/AuthProvider";
import { Sent } from "../Report";

const Post = ({ navigation }) => {
  const [selected, setSelected] = useState("all");
  const [info, setInfo] = useState("");
  const [infoSent, setInfoSent] = useState(false);
  const { user } = useContext(AuthContext);

  if (infoSent) {
    return <Sent text="Information Posted" />;
  }

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
              value={info}
              onChangeText={val => setInfo(val)}
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
              selectedValue={selected}
              onValueChange={val => {
                setSelected(val);
              }}
            >
              <Picker.Item label="All" value="all" />
              <Picker.Item label="Students" value="students" />
              <Picker.Item label="Staff" value="staff" />
            </Picker>
          </Item>
          <View style={{ margin: 10 }}>
            <Button
              title="Submit"
              onPress={() => {
                setInfoSent(true);
                db.collection("feeds")
                  .add({
                    info,
                    to: selected,
                    from: user.email
                  })
                  .then(() => {
                    Toast.show({
                      text: "Info has been posted"
                    });
                    setSelected("all");
                    setInfo("");
                    setTimeout(() => {
                      setInfoSent(false), 1000;
                    });
                    // navigation.navigate("Home");
                  });
              }}
            />
          </View>
        </Form>
      </Content>
    </Container>
  );
};

export default Post;
