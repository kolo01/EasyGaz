import { isConnected } from "@/api/authModules";
import Footr from "@/components/footer";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Button, Heading, XStack, YStack } from "tamagui";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const Home = () => {

useEffect(()=>{
  Toast.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Success',
    textBody: 'Congrats! this is toast notification success',
  })
},[])


  return (
    <View style={styles.container}>
      {/* Carte */}
      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 5.55, // Exemple de coordonnées
          longitude: -3.90,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: 5.55,
            longitude: -3.90,
          }}
        >
          <View style={styles.marker}>
            <View style={styles.markerInnerCircle} />
          </View>
        </Marker>
      </MapView> */}
      <YStack style={styles.map}>
        <Heading  textAlign="center">EMPLACEMENT DE LA MAP</Heading>
      </YStack>
      {/* Section inférieure */}

      <Button
        style={styles.button2}
        onPress={() => router.push("/seller/yourStock")}
      >
        <Text style={styles.buttonText}>Voir mon stock</Text>
      </Button>
      
      <Footr />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:100,
    
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0, 128, 128, 0.3)", // Cercle extérieur transparent
    alignItems: "center",
    justifyContent: "center",
  },
  markerInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#008080", // Cercle central
  },
  bottomSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // height:246,
  },
  button: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  button2: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    alignContent: "center",
    marginLeft: "15%",
    width: "70%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoText: {
    color: "#666",
    textAlign: "center",
    fontSize: 14,
  },
});

export default Home;
