import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";

import { RelativePathString, router } from 'expo-router';
import { Button, Input, Text, YStack } from "tamagui";
import { FontAwesome6 } from "@expo/vector-icons";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/lib/firebase.";
import { getData } from "@/lib/mmkv";
const AddGazModal = () => {
    const [visible, setVisible] = useState(false)
    const [Loading, setLoading] = useState(false)

    const [title, setTitle] = useState("")
    const [quantity, setQuantity] = useState("")
    const [prix, setPrix] = useState("")



    const onClose = () => {
        setVisible(false)
        // router.push("/loginContent/" as RelativePathString)

    }

    const onSubmit =async  () => {
        const seller_id:any = await getData("client_id")
        addDoc(collection(firestore, "product"), {
            title: title,
            owner_id: JSON.parse(seller_id),
            prix: prix,
            quantity: quantity,
            image: "",
            emplacement: "Emplacement de test"
        }).then((res) => {Alert.alert("Produit enregistré avec succes"), setVisible(false), router.push("/seller")}).catch((err) => (console.log(err)))

        
        
    }

    return (
        <View >
            <Button onPress={() => setVisible(true)} alignContent="center" backgroundColor={"#1D9A94"} padding={5} borderRadius={5}>
                <FontAwesome6 name="add" size={24} color="white" />
                <Text color={"white"} fontSize={16} >Ajouter Produit</Text>
            </Button>
            <View style={styles.container}>
                <Modal transparent visible={visible} animationType="fade">
                    <View style={styles.overlay}>
                        <View style={styles.modalContainer}>


                            {/* Message */}
                            <Text style={styles.message}>
                                Formulaire d'enregistrement
                            </Text>
                            <YStack style={styles.inputContainer}>
                                <Input
                                    placeholder="Nom du produit"
                                    style={styles.input}
                                    value={title}
                                    onChangeText={setTitle}
                                />
                                <Input
                                    placeholder="Prix du produit"
                                    style={styles.input}
                                    keyboardType="numeric"
                                    value={prix}
                                    onChangeText={setPrix}
                                />

                                <Input
                                    placeholder="Quantité"
                                    style={styles.input}
                                    value={quantity}
                                    keyboardType="numeric"
                                    onChangeText={setQuantity}
                                />

                                {/* Mettre la checkbox et son text */}
                            </YStack>
                            {/* Bouton Continuer */}
                            <TouchableOpacity disabled={Loading} style={styles.button} onPress={onSubmit}>
                                <View style={styles.buttonBackground}>
                                    <Text style={styles.buttonText} >Enregistrer</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={Loading} style={styles.button} onPress={onClose}>
                                <View style={styles.buttonBackgroundCancel}>
                                    <Text style={styles.buttonTextCancel} >Annuler</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 10,
    },
    confettiCircle: {
        width: 120,
        height: 120,
        // backgroundColor: "white",
        backgroundImage: "../../assets/images/Scan.png",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#eee",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
    },
    bravoText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2c6b78",
    },
    message: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        width: "100%",
        borderRadius: 10,
        overflow: "hidden",
    },
    buttonBackground: {
        backgroundColor: "#2c6b78",
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
    },
    buttonBackgroundCancel: {
        backgroundColor: "#E4FDFB",
        borderColor: "#2c6b78",
        borderWidth: 1,
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
    buttonTextCancel: {
        fontSize: 16,
        // color: "#fff",
        fontWeight: "bold",
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
        width: "100%",
        // marginTop: 5,
    },
});

export default AddGazModal;
