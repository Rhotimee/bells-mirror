import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Report from ".";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";
import Feeds from "../Home";
import { headerStyles } from "../utils";
import { Ionicons } from "@expo/vector-icons";

interface ReportStackProps {}

const Stack = createStackNavigator();

const ReportStack: React.FC<ReportStackProps> = ({ navigation }: any) => {
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
