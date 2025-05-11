import Footr from "@/components/footer";
import { firestore } from "@/lib/firebase.";

import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Heading } from "tamagui";

export default function Near() {
  // const depot = [
  //     {
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },{
  //         title:"Dépôt X",
  //         ville:'Yop maroc',
  //         distance:"1km"
  //     },
  // ]

  const [depot, setDepot] = useState<any>();
  const getProductList = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "depot"));
      const datas = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (datas.length > 0) {
        
        setDepot(datas);
      } else {
        // console.warn("La collection est vide.");
        setDepot([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setDepot([]);
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.PrimaryText}>Dépôts à proximité</Text>
        <Text style={styles.secondaryText}>Sélectionnez un dépôt de gaz</Text>
      </View>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        {depot && depot.length > 0 ? (
          depot?.map((data: any, index: any) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push({
                  pathname: "/logged/selected",
                  params: { id: data.id, name:data.title, zone: data.ville },
                });
              }}
            >
              <View style={styles.Boxed}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.coloredText}>{data.title}</Text>
                  <Text style={styles.secondaryText}>{data.ville}</Text>
                  {/* <Text style={styles.secondaryText}><Ionicons name="location" size={14} color="black" />{data.distance}</Text> */}
                </View>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Heading
            textAlign="center"
            size={20}
            color={"#1D9A94"}
            marginTop={50}
            fontWeight={700}
          >
            Aucun Depôt trouvée
          </Heading>
        )}
      </ScrollView>
      <Footr />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#22577A",
    paddingVertical: 16,
  },
  PrimaryText: {
    color: "#626262",
    fontSize: 18,
    fontWeight: 600,
  },
  secondaryText: {
    color: "#626262",
    fontSize: 20,
    fontWeight: 400,
  },
  coloredText: {
    color: "#1D9A94",
    fontSize: 24,
    fontWeight: 500,
  },
  Boxed: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
});
