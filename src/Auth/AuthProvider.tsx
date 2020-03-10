import React, { createContext, useState } from "react";
import { AsyncStorage } from "react-native";
import { Toast } from "native-base";
import Firebase from "../Firebase";
type User = null | string;

export const AuthContext = createContext<{
  user: User;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
  forgotPassword: (email: string) => void;
}>({
  user: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
  forgotPassword: () => {}
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  const loginFn = async (email, password) => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(async user => {
        await AsyncStorage.setItem("user", JSON.stringify(user));
        setUser(email);
      })
      .catch(e => {
        Toast.show({
          text: e.message
        });
      });
  };

  const signupFn = async (email, password) => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async user => {
        await AsyncStorage.setItem("user", JSON.stringify(user));
        setUser(email);
      })
      .catch(e => {
        Toast.show({
          text: e.message
        });
      });
  };

  const forgotPasswordFn = email => {
    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Toast.show({
          text: "Check Your email for link to reset password"
        });
      })
      .catch(e => {
        Toast.show({
          text: e.message
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async (email, password) => await loginFn(email, password),
        signup: async (email, password) => await signupFn(email, password),
        logout: async () => {
          setUser(null);
          await AsyncStorage.removeItem("user");
        },
        forgotPassword: email => forgotPasswordFn(email)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
