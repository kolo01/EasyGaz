import { useState } from "react";
import { Button, Input, Text, View, XStack, Image } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.BigText}>Connexion</Text>
      <Text style={styles.normalText}>Heureux de vous revoir</Text>

      {/* Formulaire */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Numéro de téléphone"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />
        <Input
          placeholder="Mot de passe"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => alert("En cours de contruction")}>
          <Text style={styles.forget} textAlign="right">
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bouton de connexion */}
      <Button
        onPress={() => router.push("/logged/Home")}
        style={styles.login}
      >
        Se connecter
      </Button>

      {/* Lien créer un compte */}
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.normalText2}>Créer un compte</Text>
      </TouchableOpacity>

      {/* Connexion avec Google & Apple */}
      <Text style={styles.normalText2}>Ou avec</Text>
      <View style={styles.containerFastLogin}>
        <Button style={styles.fastlogin}>
          <FontAwesome name="google" size={24} color="black" />
        </Button>
        <Button style={styles.fastlogin}>
          <FontAwesome name="apple" size={24} color="black" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  normalText: {
    fontSize: 20,
    lineHeight: 100,
    textAlign: "center",
    fontWeight: 400,
    color: "black",
  },
  normalText2: {
    fontSize: 20,
    lineHeight: 100,
    textAlign: "center",
    fontWeight: 400,
    color: "black",
    marginTop: 20,
  },
  normalText3: {
    marginTop: 40,
    fontSize: 20,
    lineHeight: 100,
    textAlign: "center",
    fontWeight: 400,
    color: "#1D9A94",
  },
  BigText: {
    fontSize: 30,
    lineHeight: 100,
    textAlign: "center",
    fontWeight: 700,
    color: "#1D9A94",
  },
  input: {
    borderColor: "#1D9A94",
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 15,
    backgroundColor: "#1D9A9421",
    padding: 15,
    borderRadius: 10,
  },
  inputContainer: {
    width: "80%",
    marginTop: 30,
  },
  login: {
    backgroundColor: "#1D9A94",
    color: "white",
    borderRadius: 20,
    textAlign: "center",
    width: "80%",

    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  forget: {
    color: "#1D9A94",
  },
  containerFastLogin: {
    marginTop: 20,
    gap: 20,
    display: "flex",
    flexDirection: "row",
  },
  fastlogin: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 15,
  },
});
