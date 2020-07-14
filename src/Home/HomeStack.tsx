import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feeds from ".";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";
import PostDetails from "./PostDetails";

interface HomeStackProps {}

const Stack = createStackNavigator();

const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Feeds"
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={() => logout()}>
            <Text style={{ paddingRight: 10 }}>Logout</Text>
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: "#ADD8E6" },
      }}
    >
      <Stack.Screen name="Home" component={Feeds} />
      <Stack.Screen name="Details" component={PostDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
