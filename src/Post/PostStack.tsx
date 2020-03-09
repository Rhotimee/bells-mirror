import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";
import Post from ".";

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
        )
      }}
    >
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};

export default PostStack;
