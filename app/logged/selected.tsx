import Footr from "@/components/footer";
import { firestore } from "@/lib/firebase.";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Heading, Text } from "tamagui";

export default function Selected() {
    // const itemsDispo = [
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },
    //     {
    //         title:"Bouteille 6kg",
    //         emplacement:'Rue des jardins',
    //         prix:"5000 FCFA",
    //         image:"../../assets/imageFigma/bouteille.png"
    //     },

    // ]

    const { id, name, zone } = useLocalSearchParams<{ id: string, name: string, zone: string }>();

    console.log(id,name,zone)
    const [itemsDispo, setItemsDispo] = useState<any>();
    const getProductList = async () => {
        try {
            const productRef = collection(firestore, "product");

            // Create a query against the collection.
            const q = query(productRef, where("owner_id", "==", id));
            const querySnapshot = await getDocs(q);
            const datas = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            if (datas.length > 0) {
                console.log("datas", datas);
                setItemsDispo(datas);
            } else {
                console.warn("La collection est vide.");
                setItemsDispo([]);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
            setItemsDispo([]);
        }
    };
    useEffect(() => {
        getProductList();
    }, []);




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.PrimaryText}>{name}</Text>
                    <Text style={styles.secondaryText}>{zone}</Text>
                </View>
                <Feather onPress={()=>{router.reload()}} style={styles.refresh} name="refresh-ccw" size={24} color="black" />
            </View>
            <ScrollView style={{ paddingHorizontal: 20, }}>
                {(itemsDispo && itemsDispo.length > 0) ? itemsDispo.map((data: any, index: any) => (
                    <TouchableOpacity key={index} onPress={() => {
                        router.push({
                            pathname: "/logged/details",
                            params: { product_id: data.id, price: data.prix, name: data.title, zone: data.emplacement },
                        });
                    }

                    }>
                        <View style={styles.Boxed}>
                            <Image source={require("../../assets/imageFigma/bouteille.png")} style={styles.image} />
                            <View width={"40%"}>
                                <Text style={styles.secondaryTextBold}>{data.title}</Text>
                                <Text style={styles.secondaryText}>{data.emplacement}</Text>
                                <Text style={styles.coloredText}>{data.prix}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                 router.push({
                                    pathname: "/logged/details",
                                    params: { product_id: data.id, price: data.prix, name: data.title, zone: data.emplacement },
                                });
                            }}>
                                <Button onPress={() => {
                                     router.push({
                                        pathname: "/logged/details",
                                        params: { product_id: data.id, price: data.prix, name: data.title, zone: data.emplacement },
                                    });
                                }} backgroundColor={"#1D9A94"} borderRadius={4} padding={10} color={"white"} ><Text color={"white"} fontSize={15}>Commander</Text></Button>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )) : <Heading textAlign="center"
                    size={20}
                    color={"#1D9A94"}
                    marginTop={50}
                    fontWeight={700}>Aucun Produit de disponible</Heading>}
            </ScrollView>
            <Footr />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 40
    }, footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#22577A",
        paddingVertical: 16,
    }, header: {
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center"
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
        // width:"80%"
    },
    secondaryTextBold: {
        color: "#626262",
        fontSize: 24,
        fontWeight: 700,
    },
    coloredText: {
        color: "#1D9A94",
        fontSize: 16,
        fontWeight: 600,
    }, Boxed: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        //  shadowColor:"black",
        borderWidth: 1,
        borderColor: "#FFF",
        padding: 10,
        alignItems: "center",
        borderRadius: 8,
        shadowColor: 'lightgray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 1,
        marginVertical: 10
    },
    refresh: {
        backgroundColor: "#F6F6F6",
    },
    image: {
        resizeMode: "contain",
        width: 80,
        height: 80
    }
})