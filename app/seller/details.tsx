import Footr from "@/components/footer";
import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Input, Separator,Text, YStack } from "tamagui";

export default function Details() {
  const itemsDispo = [
    {
      title: "Bouteille 6kg",
      emplacement: "Rue des jardins",
      prix: "5000 FCFA",
      image: "../../assets/imageFigma/bouteille.png",
    },
  ];

  const [quantity, setQuantity] = useState(1);
  const price = 5000;
  const [total, setTotal] = useState(5000);

  const onIncrement = () => {
    setQuantity(quantity + 1);
    setTotal(price * quantity);
  };
  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert(`impossible d'avoir moins que ${quantity}`);
    }
    setTotal(price * quantity);
  };

  return (
    <View style={styles.container}>
      <YStack paddingHorizontal={20}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" onPress={()=>router.back()} size={24} color="black" />
        <Text fontSize={16} fontWeight={700} color={"#626262"}>Détails sur le gaz</Text>
      </View>
      {/* image du gaz et la descr. */}
      {itemsDispo.map((data, index) => (
        // <TouchableOpacity
        //   key={index}
        //   onPress={() => router.push("/logged/selected")}
        // >
          <View style={styles.Boxed} key={index}>
            <Image
              source={require("../../assets/imageFigma/bouteille.png")}
              style={styles.image}
            />
            <View>
              <Text style={styles.secondaryTextBold}>{data.title}</Text>
              <Text style={styles.secondaryText}>{data.emplacement}</Text>
              <Text style={styles.coloredText}>{data.prix}</Text>
            </View>
          </View>
        // </TouchableOpacity>
      ))}
      {/* Gestion de la quantite */}
      <View style={styles.containerFlex}>
        <Text style={styles.secondaryTextBold}>Quantité</Text>
        <View style={styles.containerFlex}>
          <Octicons
            style={{ marginRight: 10, backgroundColor: "#F8F8F8", padding: 5 }}
            onPress={onDecrease}
            name="dash"
            size={24}
            color="black"
          />
          <Text style={styles.secondaryText}>{quantity}</Text>
          <AntDesign
            style={{ marginLeft: 10, backgroundColor: "#F8F8F8", padding: 5 }}
            onPress={onIncrement}
            name="plus"
            size={24}
            color="black"
          />
        </View>
      </View>
      {/* Calcul des prix */}
      <View>
        <View style={styles.containerFlex}>
          <Text>Sous-total</Text>
          <Text>{total} FCFA</Text>
        </View>
        <View style={styles.containerFlex}>
          <Text>Frais de livraison</Text>
          <Text>1000 FCFA</Text>
        </View>
        <Separator></Separator>
        <View style={styles.containerFlex}>
          <Text style={styles.PrimaryText}>Total</Text>
          <Text style={styles.coloredText}>{total + 1000} FCFA</Text>
        </View>
      </View>

      {/* Prise de l'addresse et soumission */}
      {/* <View style={styles.Boxed2}>
        <Text style={styles.PrimaryText}><Ionicons name="location" size={14} color="black" />Adresse de livraison</Text>
        <Input  padding={10} borderColor={"#F4F3F3"} borderWidth={2} placeholder="2plateaux non loin de SOCOCE"/>
      </View> */}
      <TouchableOpacity onPress={()=>router.push("/seller/selectLivreur")} >
        <Button onPress={()=>router.push("/seller/selectLivreur")} marginTop={100} backgroundColor={"#1D9A94"} borderRadius={4} padding={15} color={"#fff"}><Text color={"white"} fontSize={16}>Continuer  vers le livreur</Text></Button>
      </TouchableOpacity>
      </YStack>
      <YStack>
      <Footr/>
      </YStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
    paddingTop: 40,
    justifyContent:"space-between"
  },
  header: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  
    gap:20,
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
    // justifyContent: "space-between",
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
  Boxed2: {

    borderWidth: 1,
    borderColor: "#FFF",
    padding: 20,
    gap:20,
    borderTopWidth: 0,
    
    borderRadius: 8,
    shadowColor: "lightgray",
    shadowOffset: { width: 0, height: 0.5 },
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
    marginRight: 10,
  },
  containerFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
});
