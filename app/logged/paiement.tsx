import { isConnected } from "@/api/authModules";
import { auth, firestore } from "@/lib/firebase.";
import { getData } from "@/lib/mmkv";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Checkbox, Input, Separator } from "tamagui";

export default function Details() {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login")
      }
    });
  }, [])



  const payment = [
    {
      title: "Mobile Money",
      description: "Orange, MTN, Moov",
    },
    {
      title: "Wave",
      description: "Wave",
    },
    {
      title: "Carte bancaire",
      description: "Visa, Mastercard",
    },
    {
      title: "Paiement à la livraison",
      description: "Espèces uniquement",
    },
  ];

  const submit = () => {
    const user = auth.currentUser
    console.log(user)
    addDoc(collection(firestore, "paiement"), {
      way: payment[selected],
      product_id: product_id,
      quantity,
      buyer: user?.uid,
      total: total,
      transaction_id: "testTransactionID"
    }).then((res) => {  router.push({ pathname: "/logged/confirmation", params: {} }) }).catch((err) => (Alert.alert("Impossible de valider votre paiement")))

  }

  const { total, product_id, addresse, quantity } = useLocalSearchParams<{
    total: any
    product_id: any
    addresse: any
    quantity: any
  }>();
  console.log(total, product_id, addresse)

  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign onPress={() => router.back()} name="arrowleft" size={24} color="black" />
        <Text style={styles.PrimaryText}>Paiement</Text>
      </View>

      {payment.map((data, index) => (
        <TouchableOpacity key={index} onPress={() => setSelected(index)}>
          <View style={styles.Boxed}>
            {selected == index ? (
              <AntDesign name="checkcircleo" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}

            <View>
              <Text style={styles.secondaryTextBold}>{data.title}</Text>
              <Text style={styles.secondaryText}>{data.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      {selected == 0 ? (
        <View>
          <Input
            placeholder="Numéro mobile money"
            borderRadius={10}
            borderWidth={1}
            borderColor={"#A6A6A6"}
            height={53}
            marginTop={24}
            maxLength={10}
            
            padding={10}
            keyboardType="number-pad"
          />
        </View>
      ) : selected == 1 ? (
        <View>
          <Input
            placeholder="Numéro Wave"
            borderRadius={10}
            borderWidth={1}
            borderColor={"#A6A6A6"}
            height={53}
            marginTop={24}
            padding={10}
            keyboardType="number-pad"
          />
        </View>
      ) : selected == 2 ? (
        <View>
          <Input
            placeholder="Numéro de carte"
            borderRadius={10}
            borderWidth={1}
            borderColor={"#A6A6A6"}
            height={53}
            marginTop={24}
            padding={10}
            keyboardType="number-pad"
          />
          <View style={styles.Flexed}>
            <Input
              placeholder="MM/AA"
              borderRadius={10}
              borderWidth={1}
              borderColor={"#A6A6A6"}
              height={53}
              marginTop={24}
              width={"45%"}
              padding={10}
              keyboardType="number-pad"
            />
            <Input
              placeholder="CVV"
              borderRadius={10}
              width={"45%"}
              borderWidth={1}
              borderColor={"#A6A6A6"}
              height={53}
              marginTop={24}
              padding={10}
              keyboardType="number-pad"
            />
          </View>
        </View>
      ) : (
        <>

        </>
      )}
      <View style={styles.totalBox}>
        <View style={styles.totalContainer}>
          <Text style={styles.PrimaryText}>Total</Text>
          <Text style={styles.coloredText}>{total} FCFA</Text>
        </View>
        <Text style={styles.secondaryText}>Livraison incluse</Text>
      </View>

      <Button onPress={() => submit()} style={styles.Button}><Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>Paiement maintenant</Text></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    gap: 40,
    alignItems: "center",
  },
  PrimaryText: {
    color: "#626262",
    fontSize: 18,
    fontWeight: 600,
  },
  secondaryText: {
    color: "#626262",
    fontSize: 14,
    fontWeight: 400,
  },
  secondaryTextBold: {
    color: "#626262",
    fontSize: 16,
    fontWeight: 500,
  },
  coloredText: {
    color: "#1D9A94",
    fontSize: 16,
    fontWeight: 600,
  },
  Boxed: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "",
    gap: 20,
    //  shadowColor:"black",
    borderWidth: 1,
    borderColor: "#FFF",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "lightgray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
    marginVertical: 10,
  },
  refresh: {
    backgroundColor: "#F6F6F6",
  },
  image: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  totalBox: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  totalContainer: {
    justifyContent: "space-between",
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    flexDirection: "row",
    paddingTop: 10,
    marginBottom: 10,
  },
  Button: {
    backgroundColor: "#1D9A94",
    color: "#FFF",
    padding: 10,
    height: 41,
    marginTop: 20
  },
  Flexed: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
