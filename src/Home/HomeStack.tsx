import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feeds from ".";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";
import PostDetails from "./PostDetails";
import { headerStyles } from "../utils";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface HomeStackProps {}

const Stack = createStackNavigator();

const HomeStack: React.FC<HomeStackProps> = ({ navigation }: any) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Feeds"
      screenOptions={({ route }) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => logout()}>
            <Text style={{ paddingRight: 10, color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
        ),
        headerLeft: () => {
          if (route.name === "Home") {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
                style={{
                  paddingLeft: 10,
                }}
              >
                <Feather name="menu" size={24} color="white" />
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                paddingLeft: 10,
              }}
            >
              <Ionicons name="ios-arrow-back" size={24} color="white" />
            </TouchableOpacity>
          );
        },
        ...headerStyles,
      })}
    >
      <Stack.Screen name="Home" component={Feeds} />
      <Stack.Screen name="News" component={PostDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
