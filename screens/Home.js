import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../firebaseConfig";

const Home = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const handleLogOut = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigation.navigate("Login");
    }
  }, [currentUser]);

  return (
    <View style={styles.container}>
      {currentUser ? (
        <View style={styles.card}>
          <Text style={styles.heading}>You Are Logged In</Text>
          <Text style={styles.name}>Name: {currentUser.displayName}</Text>
          <Text style={styles.email}>Email: {currentUser.email}</Text>
          <Button title="Logout" onPress={handleLogOut} />
        </View>
      ) : (
        <Text>No user logged in</Text>
      )}
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
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 20,
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "hsl(221, 39.3%, 11%)",
  },
  name: {
    fontSize: 16,
    marginBottom: 10,
    color: "hsl(221, 39.3%, 11%)",
  },
  email: {
    fontSize: 16,
    color: "hsl(221, 39.3%, 11%)",
    marginBottom: 10,
  },
});
export default Home;
