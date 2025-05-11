import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import {router } from "expo-router";
import { Avatar, Separator, Text, XStack, YStack } from "tamagui";
import Footr from "@/components/footer";

export default function QRScreen() {

  const name = "KONE KOLOTIOLOMAN"
  return (
    <View style={styles.container}>
      {/* Header */}
    

      {/* QR Code Section */}
      <ScrollView >
        <View  style={styles.qrContainer}>
          <Text fontWeight={700} fontSize={24} color={"#000000"} textAlign={"center"}>Compte</Text>
          <XStack borderWidth={2} borderColor={"#D9D9D9"} marginTop={40} width={"100%"}></XStack>
        </View>

        <YStack paddingHorizontal={30}>
          <YStack backgroundColor={"#2427600D"}  borderRadius={6} padding={16} gap={20} marginTop={20}>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/settings/editProfils")}>
            <MaterialCommunityIcons name="account" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Editer Profile</Text>
            </XStack>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/")}>
            <MaterialCommunityIcons name="shield-alert-outline" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Securité</Text>
            </XStack>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/")}>
            <Feather name="bell" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Notifications</Text>
            </XStack>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/login")}>
            <MaterialIcons name="lock-outline" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Confidentialité</Text>
            </XStack>
          </YStack>


          <YStack backgroundColor={"#2427600D"}  borderRadius={6} padding={16} gap={20} marginTop={20}>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/")}>
            <MaterialIcons name="outlined-flag" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Reporter un problème</Text>
            </XStack>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/")}>
            <AntDesign name="addusergroup" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Ajouter un compte</Text>
            </XStack>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/")}>
            <MaterialIcons name="logout" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Déconnexion</Text>
            </XStack>
          
          </YStack>



          <YStack backgroundColor={"#2427600D"}  borderRadius={6} padding={16} gap={20} marginTop={20}>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/")}>
            <MaterialIcons name="support-agent" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Contactez support</Text>
            </XStack>
            <XStack gap={20} alignContent="center" alignItems="center" onPress={()=>router.push("/")}>
            <MaterialIcons name="data-exploration" size={24} color="#1D9A94" />
            <Text fontSize={20} fontWeight={500} color={"black"} >Cache</Text>
            </XStack>
          
            
          </YStack>

        </YStack>
       
      </ScrollView>

      {/* Footer Navigation */}
     <Footr/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop:57,
    // paddingHorizontal:20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    // padding: 16,
    paddingTop: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  greeting: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  location: {
    color: "#fff",
    fontSize: 14,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  content: {
    alignItems: "center",
    // padding: 16,
  },
  qrContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  qrCodePlaceholder: {
    width: 345,
    height: 200,
    backgroundColor: "#F9FFFA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    boxShadow:
      " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  scanButton: {
    backgroundColor: "#57CC99",
    // padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  scanButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    color: "#22577A",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  participationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#57CC99",
    padding: 16,
    borderRadius: 16,
    width: "100%",
    marginTop: 8,
  },
  cardIcon: {
    marginRight: 16,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#22577A",
    paddingVertical: 16,
  },
});
