import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      //alert(JSON.stringify(data));
      //alert("Login Success");
      navigation.navigate("Home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={{
          uri: "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
        }}
      />
      <Text style={styles.heading}>Login To Continue</Text>
      <Text style={styles.subheading}>
        nulla tempor ea aliquip do minim eiusmod laborum eu veniam
      </Text>
      <TextInput
        placeholder="Enter Your Email"
        Autocapitalize="off"
        style={styles.input}
        value={email}
        onChangeText={(event) => setEmail(event)}
      />
      <TextInput
        placeholder="Enter Your Password"
        style={styles.input}
        value={password}
        onChangeText={(event) => setPassword(event)}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleSubmit}
        style={styles.button}
      >
        <View>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.signupText}>Not A Member?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.loginLink}>Signup Now</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: 15,
  },
  Logo: {
    width: 110,
    height: 150,
  },
  heading: {
    marginTop: 12,
    marginBottom: 10,
    fontSize: 28,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
  },
  input: {
    height: 56,
    width: "100%",
    margin: 12,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    fontSize: 15,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    width: "100%",
    margin: 12,
    backgroundColor: "#FFA000",
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  forogotPassword: {
    fontSize: 14,
  },
  signupText: {
    marginTop: 20,
  },
  loginLink: {
    color: "blue",
  },
});
export default Login;
