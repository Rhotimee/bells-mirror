import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { AsyncStorage } from "react-native";
import { Toast } from "native-base";
import Firebase, { db } from "../Firebase";

type Type = "student" | "staff";

type UserObject = {
  name: string;
  email: string;
  type: Type;
  matric: string;
};

type User = null | UserObject | firebase.firestore.DocumentData;

export const AuthContext = createContext<{
  user: User;
  login: (email: string, password: string) => void;
  signup: (
    email: string,
    password: string,
    matric: string,
    name: string,
    type: Type
  ) => void;
  logout: () => void;
  forgotPassword: (email: string) => void;
  setUser: Dispatch<SetStateAction<User>>;
}>({
  user: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
  forgotPassword: () => {},
  setUser: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  const loginFn = async (email, password) => {
    try {
      const data = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );

      const { user } = data;

      if (user) {
        await db
          .collection("users")
          .where("email", "==", email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              AsyncStorage.setItem("user", JSON.stringify(doc.data()));
              setUser(doc.data());
            });
          });
      }
    } catch (e) {
      Toast.show({
        text: e.message,
      });
    }
  };

  const signupFn = async (email, password, matric, name, type) => {
    try {
      const data = await Firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = data;

      if (user) {
        const xx = await db.collection("users").add({
          name,
          email,
          matric,
          type,
        });

        const userObj = {
          name,
          email,
          type,
          matric,
        };
        await AsyncStorage.setItem("user", JSON.stringify(userObj));
        setUser(userObj);
      }
    } catch (e) {
      Toast.show({
        text: e.message,
      });
    }
  };

  const forgotPasswordFn = (email) => {
    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Toast.show({
          text: "Check Your email for link to reset password",
        });
      })
      .catch((e) => {
        Toast.show({
          text: e.message,
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async (email, password) => await loginFn(email, password),
        signup: async (email, password, matric, name, type) =>
          await signupFn(email, password, matric, name, type),
        logout: async () => {
          setUser(null);
          await AsyncStorage.removeItem("user");
        },
        forgotPassword: (email) => forgotPasswordFn(email),
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
