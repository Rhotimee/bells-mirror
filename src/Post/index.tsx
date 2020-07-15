import React, { useState, useContext } from "react";
import { View, Button, TouchableOpacity, Text, Image } from "react-native";
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
import * as ImagePicker from "expo-image-picker";

import { db } from "../Firebase";
import { AuthContext } from "../Auth/AuthProvider";
import { Sent } from "../Report";

const Post = ({ navigation }) => {
  const [selected, setSelected] = useState("all");
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");
  const [infoSent, setInfoSent] = useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [photo, setPhoto] = React.useState(null);
  const { user } = useContext(AuthContext);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    console.log(pickerResult);
    setSelectedImage({ localUri: pickerResult.uri });

    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

    let data = {
      file: base64Img,
      upload_preset: "bells-mirror",
    };

    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/timi/upload";
    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();

        //Here I'm using another hook to set State for the photo that we get back //from Cloudinary

        setPhoto(data.url);
        console.log(photo);
      })
      .catch((err) => console.log(err));
  };

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
          {photo !== null && (
            <View style={{}}>
              <Image
                source={{ uri: photo }}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            </View>
          )}
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={{ alignSelf: "flex-start" }}
          >
            <Text
              style={{
                fontSize: 16,
                backgroundColor: "#d6ad60",
                color: "#fff",
                padding: 10,
                marginTop: 10,
              }}
            >
              Upload Photo
            </Text>
          </TouchableOpacity>
          <View style={{ margin: 10 }}>
            <Button
              title="Submit"
              onPress={() => {
                setInfoSent(true);
                db.collection("feeds")
                  .add({
                    photo,
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
                    setPhoto(null);
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
