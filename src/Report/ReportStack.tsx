import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Report from ".";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";
import Feeds from "../Home";

interface ReportStackProps {}

const Stack = createStackNavigator();

const ReportStack: React.FC<ReportStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName="report"
      screenOptions={{
        headerTitle: "Report",
        headerRight: () => (
          <TouchableOpacity onPress={() => logout()}>
            <Text style={{ paddingRight: 10, color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: "#0E1455" },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen name="Report" component={Report} />
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

export default ReportStack;
