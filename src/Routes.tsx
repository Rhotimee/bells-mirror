import React, { useContext, useState, useEffect, Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./Auth/AuthStack";
import { AuthContext } from "./Auth/AuthProvider";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { Center } from "./Center";
import { AppTabs } from "./AppTabs";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

interface routesProps {}

const Routes: React.FC<routesProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadAsyncFn() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
  }

  function handleLoadingError(error) {
    console.warn(error);
  }

  useEffect(() => {
    AsyncStorage.getItem("user").then(userString => {
      const userDetails = JSON.parse(userString);
      // if (userDetails) {
      //   login(userDetails);
      // }
    });
  }, []);

  if (loading) {
    return (
      <Center>
        <AppLoading
          startAsync={loadAsyncFn}
          onError={handleLoadingError}
          onFinish={() => setLoading(false)}
        />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
