import React, { useContext, useState } from "react";
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
  Textarea,
  Toast
} from "native-base";
import { Center } from "../Center";
import { db } from "../Firebase";
import { AuthContext } from "../Auth/AuthProvider";

export const Sent = ({ text }) => (
  <Center>
    <Text>{text}</Text>
  </Center>
);

const Report = ({ navigation }) => {
  const [selected, setSelected] = useState("General Suggestion");
  const [info, setInfo] = useState("");
  const [infoSent, setInfoSent] = useState(false);
  const { user } = useContext(AuthContext);

  if (infoSent) {
    return <Sent text="Report Sent" />;
  }

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
              value={info}
              onChangeText={val => setInfo(val)}
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
              selectedValue={selected}
              onValueChange={val => {
                setSelected(val);
              }}
            >
              <Picker.Item
                label="General Suggestion"
                value="General Suggestion"
              />
              <Picker.Item
                label="Medical Emergency"
                value="Medical Emergency"
              />
              <Picker.Item
                label="Sexual Harassment"
                value="Sexual Harassment"
              />
              <Picker.Item label="Drug Abuse" value="Drug Abuse" />
            </Picker>
          </Item>
          <View style={{ margin: 10 }}>
            <Button
              title="Submit"
              disabled={infoSent}
              onPress={() => {
                setInfoSent(true);
                db.collection("reports")
                  .add({
                    info,
                    to: selected,
                    from: user.email
                  })
                  .then(() => {
                    setInfoSent(true);
                    setSelected("General Suggestion");
                    setInfo("");
                    setTimeout(() => {
                      setInfoSent(false), 1000;
                    });
                    Toast.show({
                      text: "Report has been sent"
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

export default Report;
