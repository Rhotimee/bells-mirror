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
  Toast,
  Input,
} from "native-base";
import { db } from "../Firebase";
import { AuthContext } from "../Auth/AuthProvider";
import { Sent } from "../Report";

const Post = ({ navigation }) => {
  const [selected, setSelected] = useState("all");
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");
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
          <Label style={{}}>Title</Label>
          <Textarea
            rowSpan={2}
            bordered
            placeholder=""
            underline
            style={{ width: "100%", marginBottom: 20 }}
            value={title}
            onChangeText={(val) => setTitle(val)}
          />

          <Label style={{}}>Details</Label>
          <Textarea
            rowSpan={5}
            bordered
            placeholder=""
            underline
            style={{ width: "100%", marginBottom: 20 }}
            value={info}
            onChangeText={(val) => setInfo(val)}
          />

          <Picker
            style={{ width: 100 }}
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            // style={{ width: undefined }}
            placeholder="Send to"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={selected}
            onValueChange={(val) => {
              setSelected(val);
            }}
          >
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Students" value="students" />
            <Picker.Item label="Staff" value="staff" />
          </Picker>
          <View style={{ margin: 10 }}>
            <Button
              title="Submit"
              onPress={() => {
                setInfoSent(true);
                db.collection("feeds")
                  .add({
                    title,
                    info,
                    to: selected,
                    from: user.name,
                    date: Date.now(),
                  })
                  .then(() => {
                    Toast.show({
                      text: "Info has been posted",
                    });
                    setSelected("all");
                    setInfo("");
                    setTitle("");
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
