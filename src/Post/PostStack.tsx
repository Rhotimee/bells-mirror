import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";
import Post from ".";
import HomeStack from "../Home/HomeStack";
import Feeds from "../Home";
import { headerStyles } from "../utils";
import { Ionicons } from "@expo/vector-icons";

interface PostStackProps {}

const Stack = createStackNavigator();

const PostStack: React.FC<PostStackProps> = ({ navigation }: any) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Post"
      screenOptions={{
        headerTitle: "Post",
        headerRight: () => (
          <TouchableOpacity onPress={() => logout()}>
            <Text style={{ paddingRight: 10, color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              paddingLeft: 10,
            }}
          >
            <Ionicons name="ios-arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        ),
        ...headerStyles,
      }}
    >
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen
        name="Home"
        component={Feeds}
        options={{
          headerTitle: "Home",
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default PostStack;
