import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import PostStack from "../Post/PostStack";
import ReportStack from "../Report/ReportStack";
import EmergencyContactStack from "../EmergencyContacts/EmergencyContactStack";
import SupportStack from "../Support/SupportStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#d6ad60",
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Post News" component={PostStack} />
      <Drawer.Screen name="Report Incident" component={ReportStack} />
      <Drawer.Screen
        name="Emergency contacts"
        component={EmergencyContactStack}
      />
      <Drawer.Screen name="Support center" component={SupportStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
