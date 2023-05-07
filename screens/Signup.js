import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      alert(`Welcome ${name}, you have successfully signed up!`);
      navigation.navigate("Login");
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
      <Text style={styles.heading}>Signup To Continue</Text>
      <Text style={styles.subheading}>
        nulla tempor ea aliquip do minim eiusmod laborum eu veniam
      </Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.input}
        value={name}
        onChangeText={(event) => setName(event)}
      />
      <TextInput
        placeholder="Enter Your Email"
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
          <Text style={styles.buttonText}>Signup</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.signupText}>Already Have An Account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLink}>Login</Text>
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
export default Signup;
