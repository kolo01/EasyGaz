import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "tamagui";

export default function Confirmation() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/imageFigma/succesPayment.png")}
        style={styles.image}
      />
      <Text style={styles.bigText}>Commande confirmée !</Text>
      <Text style={styles.normalText}>
        Votre commande a été enregistrée avec succès
      </Text>
      <View style={styles.greenBox}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Image
            source={require("../../assets/imageFigma/clockPayment.png")}
            style={styles.imagesTwo}
            tintColor={"#1D9A94"}
          />
          <Text style={styles.normalText}>
            Livraison estimée: 15-30 minutes
          </Text>
        </View>
        <View>
          <Text style={styles.normalTextBold}>Détails de la commande</Text>
          <Text style={styles.smallText}>1x Bouteille 12kg Premium</Text>
          <Text style={styles.smallText}>Dépôt Cocody Centre</Text>
          <Text style={styles.normalTextBold}>Méthode de paiement</Text>
          <Text style={styles.smallText}>Mobile money</Text>
        </View>
        <View style={styles.flexed}>
          <Text style={styles.BoldText}>Total payé</Text>
          <Text style={styles.boldColor}>10000 FCFA</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{router.push("/logged")}}>
        <Button
        onPress={()=>{router.push("/logged")}}
          style={{
            backgroundColor: "#1D9A94",
            color: "#FFF",
            padding: 10,
            height: 41,
            marginTop: 20,
            width:300
          }}
        >
          <Text style={{ color: "white" }}>Retour a l’accueil</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 100,
    gap: 20,
  },
  image: {
    width: 69,
    height: 69,
  },
  bigText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#626262",
  },
  normalText: {
    fontSize: 16,
    fontWeight: 400,
    color: "#626262",
  },
  greenBox: {
    backgroundColor: "#F3FFFE",
    width: 300,
    padding: 10,
    gap: 10,
    alignContent: "center",
    alignItems: "center",
  },
  imagesTwo: {
    width: 20,
    height: 20,
  },
  normalTextBold: {
    fontSize: 16,
    fontWeight: 700,
    color: "#626262",
    marginVertical: 10,
  },
  smallText: {
    fontSize: 16,
    fontWeight: 400,
    color: "#626262",
  },
  boldColor: {
    fontSize: 16,
    fontWeight: 600,
    color: "#1D9A94",
  },
  BoldText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#626262",
  },
  flexed: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 285,
    marginTop: 20,
  },
});
