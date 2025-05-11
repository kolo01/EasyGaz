import { useEffect, useState } from "react";
import { Button, Input, Text, View, XStack, Image } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { auth, firestore } from "@/lib/firebase.";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { getData, storeData } from "@/lib/mmkv";
import LoadingDots from "react-native-loading-dots";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setloading] = useState(false)

  const login = (email: any, password: any) => {
    setloading(true)
    signInWithEmailAndPassword(auth, email, password).then(async (res) => {

      if (res.user.emailVerified) {
        const snapshot = await getDoc(doc(firestore, "users", res.user.uid))
        if (snapshot.exists()) {
          console.log(snapshot.data())
          if (snapshot.data().role == "seller") {
            await storeData("client_id", JSON.stringify(res.user.uid))
            await storeData("user", JSON.stringify(snapshot.data()))
            await storeData("type", "seller")
            router.push("/seller")
          } else {
            await storeData("client_id", JSON.stringify(res.user.uid))
            await storeData("user", JSON.stringify(snapshot.data()))
            await storeData("type", snapshot.data().role)
            router.push("/logged")

          }
        } else {

          console.log("No such document!");
          setloading(false)
        }

      } else {
        setloading(false)
        Alert.alert("Email non verifié", "Veuillez verifier votre Email svp!!")
      }

    }).catch((err) => {
      setloading(false)
      Alert.alert('Erreur inattendu', "impossible de se connecter, veuillez reessayer")
    })
  }





  return (
    <View style={styles.container}>
      <Text style={styles.BigText}>Connexion</Text>
      <Text style={styles.normalText}>Heureux de vous revoir</Text>

      {/* Formulaire */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Votre Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Mot de passe"
          style={styles.input}
          value={password}
          secureTextEntry={true}
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
        onPress={() => login(email, password)}
        // onPress={() => router.push("/logged")}
        style={styles.login}
        color={"white"}
      >
        {Loading ?
          <LoadingDots size={16} bounceHeight={16} />
          : <Text color={"white"} fontSize={16} fontWeight={500}>Se connecter</Text>}
      </Button>

      {/* Lien créer un compte */}
      <Button backgroundColor={"#E4FDFB"}

        borderRadius={10}
        textAlign="center"
        width={"80%"}

        marginTop={20}
        paddingVertical={15}
        paddingHorizontal={20}

        onPress={() => router.push("/register")}>
        <Text color={"#626262"} fontWeight={500} fontSize={16} >Créer un compte</Text>
      </Button>

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
    // marginTop: 20,
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
    tintColor: "white",
    color: "#fff",
    borderRadius: 10,
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
    // marginTop: 20,
    gap: 20,
    display: "flex",
    flexDirection: "row",
  },
  fastlogin: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
});
