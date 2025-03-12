import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "tamagui";

const DreamJobScreen = () => {
  return (
    <View style={styles.main}>
      {/* View mis la pour ajout du background plus tard (flemme de faire un design compliquer avec les formes) */}
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* Insertion de l'image du figma */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.images}
            source={require("@/assets/imageFigma/slide4.png")}
          />
        </View>
        {/* Insertion du texte du texte sous l'image (Generer un beau texte avec chatgpt ou autre IA qui puisse donner un beau texte) */}
        <View style={styles.illustrationMain}>
          <Text style={styles.textEnGrand}>Discover Your Dream Job here</Text>
          <Text style={styles.textEnLegende}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
        </View>
        {/* Insertion des bouttons ignorer, suivant et des dots */}
        <View style={styles.optionMain}>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Button
              onPress={() => router.push("/login")}
              color={"lightgray"}
              size={18}
              fontWeight={400}
            >
              Ignorer
            </Button>
          </TouchableOpacity>
          <View style={styles.dotted}>
            <Entypo name="dot-single" size={30} color="#1D9A94" />
            <Entypo name="dot-single" size={30} color="lightgray" />
            <Entypo name="dot-single" size={30} color="lightgray" />
            <Entypo name="dot-single" size={30} color="lightgray" />
          </View>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Button
              onPress={() => router.push("/login")}
              color={"#2D2B2E"}
              size={18}
              fontWeight={400}
            >
              Suivant
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 160,
  },
  images: {
    width: 327,
    height: 319,
    
    alignContent:"center",
    resizeMode:"contain"
  },
  illustrationMain: {
    justifyContent: "space-between",
  },
  textEnGrand: {
    color: "#1D9A94",
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 38,
    paddingHorizontal: 20,
    alignContent: "center",
    textAlign: "center",
  },
  textEnLegende: {
    color: "#626262",
    fontSize: 14,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  optionMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingBottom:20,
    height: 50,
  },
  dotted: {
    display: "flex",
    flexDirection: "row",
    // justifyContent:"space-around"
    rowGap: 5,
  },
});

export default DreamJobScreen;
