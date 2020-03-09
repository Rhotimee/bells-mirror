import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type AuthParamList = {
  signin: undefined;
  signup: undefined;
  forgotPassword: undefined;
};

// T extends keyof AuthParamList ==> means it is either login or register
export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};
