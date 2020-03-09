import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Report from ".";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "native-base";
import { AuthContext } from "../Auth/AuthProvider";

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
            <Text style={{ paddingRight: 10 }}>Logout</Text>
          </TouchableOpacity>
        )
      }}
    >
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

export default ReportStack;
