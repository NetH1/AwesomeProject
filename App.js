import React from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  View,
  StyleSheet
} from "react-native";
import Calculator from "./assets/components/Calculator";
import Galery from "./assets/Galery";

//export default function App() {
const App = () => {
  const onButtonPress = () => {
    setIsLogging(true);
    if (useFirebase) {
    } else {
      setTimeout(() => {
        if (email == "aj_pktl@mail.ru" && password == "asd123") {
          setIsLogged(true);
        }
        setIsLoggingIn(false);
      }, 1500);
    }
    // alert("Hello");
    // Alert.alert("Error");
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <View style={styles.app}>
      {/* <ImageBackground
        style={styles.main_background}
        source={{
          uri:
            "https://phonoteka.org/uploads/posts/2022-02/1643998266_1-phonoteka-org-p-fon-dlya-prezentatsii-nebo-s-oblakami-1.jpg"
        }}
      >
        <Image
          style={styles.main_image}
          source={{
            uri: "https://img.icons8.com/?size=512&id=108639&format=png"
          }}
        />
        <Text style={styles.main_text}  onPress={Keyboard.dismiss}>Hello React Native</Text>
        <View style={styles.inputs_wrap}>
          <TextInput
          inputMode="email"
            style={styles.user_email}
            placeholder="user@mail.com"
            placeholderTextColor="#aaa"
            onChangeText={setEmail}
            value={email}
            onBlur={() => {
              console.log("text input blur");
            }}
          />
          <TextInput
          secureTextEntry={true}
            style={styles.user_email}
            placeholder="user@mail.com"
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#aaa"
          />
        </View>
        <Button title="Log In" onPress={onButtonPress} />
      </ImageBackground> */}
      {/* <Calculator /> */}
      <Galery />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  main_background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  main_image: {
    height: 248,
    width: 248
  },
  main_text: {
    fontSize: 48,
    textAlign: "center"
  },
  inputs_wrap: {
    padding: 12,
    width: 450,
    alignItems: "center"
  },
  user_email: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "white",
    color: "#333",
    width: "75%"
  }
});

export default App;