import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AppParamList } from "./AppParamList";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import HomeStack from "./Home/HomeStack";
import ReportStack from "./Report/ReportStack";
import PostStack from "./Post/PostStack";

interface AppTabProps {}

const Tabs = createBottomTabNavigator();

export const AppTabs: React.FC<AppTabProps> = ({}) => {
  return (
    <Tabs.Navigator
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
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Report" component={ReportStack} />
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Post" component={PostStack} />
    </Tabs.Navigator>
  );
};
