import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";
import Post from ".";
import HomeStack from "../Home/HomeStack";
import Feeds from "../Home";

interface PostStackProps {}

const Stack = createStackNavigator();

const PostStack: React.FC<PostStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Post"
      // screenOptions={{
      //   header: () => null
      // }}
      screenOptions={{
        headerTitle: "Post",
        headerRight: () => (
          <TouchableOpacity onPress={() => logout()}>
            <Text style={{ paddingRight: 10 }}>Logout</Text>
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: "#ADD8E6" },
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
