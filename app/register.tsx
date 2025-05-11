import { useState } from "react";
import { Button, Input, Text, View, XStack, Image } from "tamagui";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, firestore } from "@/lib/firebase.";
import { doc, setDoc } from "firebase/firestore";
import LoadingDots from "react-native-loading-dots";


export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ville, setVille] = useState("");
  const [load, setLoad] = useState(false)


  const register = (name: any, surname: any, email: any,ville:any, password: any, role: any) => {
    setLoad(true)
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      setDoc(doc(firestore, "users", res.user.uid), {
        name, surname, email,ville, role
      }).then((response) => {
        auth.currentUser && sendEmailVerification(auth.currentUser);
        if (role == "seller") {
          setDoc(doc(firestore, "depot",res?.user?.uid), {
            distance:"0KM",
            title:name,
            ville:ville
          }).then(()=>{Alert.alert("Merci boss")}).catch((err)=>Alert.alert(err))
        }
       
        Alert.alert(`Bienvenue ${name}`, "compte créé avec succès, veuillez verifier votre mail afin de valider l'inscription");
        // router.push('/login');
        setName("")
        setSurname("")
        setEmail("")
        setVille("")
        setLoad(false)
        setPassword("")
      }).catch((err) => {
        setLoad(false)
        Alert.alert("Erreur inattendu", "Veuillez reessayer plus tard ou tenter de vous connecter")
      })
    }).catch((error) => {
      setLoad(false)
      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        Alert.alert("Duolication de compte", "Votre Email existe déjà")
      } else {
        Alert.alert("Erreur inattendu", "Veuillez  reessayer, si le problème persiste veuillez contacter un administrateur")
      }
    })


  }



  return (
    <View style={styles.container}>
      <Text style={styles.BigText}>Inscription</Text>

      {/* Formulaire */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Nom à afficher"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Nom & Prenom"
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
        />
        <Input
          placeholder="Ville"
          style={styles.input}
          value={ville}
          onChangeText={setVille}
        />

        <Input
          placeholder="Email"
          style={styles.input}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <Input
          placeholder="Mot de passe"
          style={styles.input}

          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        {/* Mettre la checkbox et son text */}
      </View>

      {/* Bouton de connexion */}
      <Button
        onPress={() => register(name, surname, email,ville, password, "user")}
        // onPress={() => router.push("/login")}
        style={styles.login}
      >
         {load ? 
          <LoadingDots size={16} bounceHeight={16}/>:
        <Text color={"white"} fontWeight={500} fontSize={16}> S'inscrire</Text>}
      </Button>

      {/* Lien créer un compte */}
      <Button

        backgroundColor={"#E4FDFB"}
        width={"80%"}
        borderRadius={15}

        padding={15}

        marginTop={10}
        onPress={() => {
          register(name, surname, email,ville, password, "seller")
        }}
      >
         {load ? 
          <LoadingDots size={16} bounceHeight={16}/>:
        <Text fontWeight={500} color={"#626262"} fontSize={16}>M'inscrire comme vendeur</Text>}
      </Button>

     
        <Text  onPress={() => {
          router.push("/login");
        }} fontWeight={500} marginLeft={"22%"} marginTop={10}  color={"#1D9A94"} fontSize={14} textAlign="right" justifyContent="flex-end">Vous avez déjà un compte ? ici</Text>
   
      {/* Connexion avec Google & Apple */}
      <Text style={styles.normalText2}>Ou continuez avec</Text>
      <View style={styles.containerFastLogin}>
        <Button
          onPress={() => alert("En cours de contruction")}
          style={styles.fastlogin}
        >
          <FontAwesome name="google" size={24} color="black" />
        </Button>
        <Button
          onPress={() => alert("En cours de contruction")}
          style={styles.fastlogin}
        >
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
    fontFamily: "poppins",
    fontWeight: 700,
    color: "#1D9A94",
  },
  input: {
    borderColor: "#1D9A94",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#1D9A9421",

    marginBottom: 15,
    padding: 15,

    borderRadius: 10,
  },
  inputContainer: {
    width: "80%",
    // marginTop: 5,
  },
  login: {
    backgroundColor: "#1D9A94",
    color: "white",
    borderRadius: 20,
    textAlign: "center",
    width: "80%",

    marginTop: 10,
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
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
