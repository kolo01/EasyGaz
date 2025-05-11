import AddGazModal from "@/components/addGaz";
import Footr from "@/components/footer";
import Search from "@/components/searchStock";
import { firestore } from "@/lib/firebase.";
import { getData } from "@/lib/mmkv";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Text, XStack, YStack } from "tamagui";

export default function Selected() {

  const [itemsStock, setItemsStock] = useState([])




  const getStock = async () => {
    const seller_id = await getData("client_id")
    const citiesRef = collection(firestore, "product");
    const q = query(citiesRef, where('owner_id', '==', seller_id));
    const querySnapshot = await getDocs(q);
    const datasQuery: any = []
    querySnapshot.forEach((doc) => {
      datasQuery.push(doc.data())
    });
    setItemsStock(datasQuery)
  }



  useEffect(() => {
    getStock()
  }, [])



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View justifyContent={"center"}>
          <Text style={styles.PrimaryText}>Mon Stock</Text>
          {/* <Text style={styles.secondaryText}>yop maroc</Text> */}
        </View>
        <XStack>
          <AddGazModal />
        </XStack>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {itemsStock.length > 0 ?
          <>
            {itemsStock.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => router.push("/seller/details")}
              >
                <XStack gap={20}>
                  <View style={styles.Boxed} paddingVertical={20}
                    paddingHorizontal={10} >
                    <Image
                      source={require("../../assets/imageFigma/bouteille.png")}
                      style={styles.image}
                    />
                  </View>
                  <YStack
                    style={styles.Boxed2}
                    paddingVertical={20}
                    paddingHorizontal={50}
                  >
                    <YStack gap={5} justifyContent="center" alignContent="center" alignItems="center">
                      <Text style={styles.secondaryTextBold}>{data.title}</Text>
                      <XStack alignContent="center" alignItems="center" gap={5} >
                        <MaterialIcons
                          name="star-border"
                          size={24}
                          color="#FFCD29"
                        />
                        <Text color={"#1D9A94"} fontSize={15} fontWeight={700}>
                          {data?.rate ? data.rate : 0}
                        </Text>
                      </XStack>
                      <Text style={styles.coloredText}>{data.prix} XOF</Text>
                    </YStack>
                    <TouchableOpacity
                      onPress={() => router.push("/seller/details")}
                    >
                      <Button
                        onPress={() => router.push("/seller/details")}
                        backgroundColor={"#1D9A94"}
                        borderRadius={10}
                        padding={10}
                        borderColor={"#000000"}
                        color={"white"}
                      >
                        <Text color={"white"} fontSize={15}>
                          Détail
                        </Text>
                      </Button>
                    </TouchableOpacity>
                  </YStack>
                </XStack>
              </TouchableOpacity>
            ))}</>
          : <XStack marginTop={"100%"} justifyContent="center">  <AddGazModal /> </XStack>}
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#22577A",
    paddingVertical: 16,
  },
  header: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  PrimaryText: {
    color: "#1D9A94",
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
  },
  secondaryText: {
    color: "#626262",
    fontSize: 14,
    fontWeight: 400,
  },
  secondaryTextBold: {
    color: "#1D9A94",
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
    flexDirection: "column",
    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "#FFF",
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "lightgray",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 1,
    marginVertical: 10,
  }, Boxed2: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "#FFF",
    width:200,
    padding: 5,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "lightgray",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 0.5,
    marginVertical: 5,
  },
  refresh: {
    backgroundColor: "#F6F6F6",
  },
  image: {

    resizeMode: "cover",
    width: 80,
    height: 100,
  },
});
