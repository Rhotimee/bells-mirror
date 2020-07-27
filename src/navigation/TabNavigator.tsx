import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import HomeStack from "../Home/HomeStack";
import PostStack from "../Post/PostStack";
import ReportStack from "../Report/ReportStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Report") {
            return <MaterialIcons name={"report"} size={size} color={color} />;
          } else if (route.name === "Post") {
            iconName = "plus";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#d6ad60",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Report" component={ReportStack} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Post" component={PostStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
