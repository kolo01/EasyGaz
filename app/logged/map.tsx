import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button, XStack } from 'tamagui';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Carte */}
      <MapView
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
      </MapView>

      {/* Section inférieure */}
      
        <Button  style={styles.button2} onPress={()=>router.push("/logged/near")}><Text style={styles.buttonText}>Voir tout les dépôts à proximité</Text></Button>
      
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={()=>router.push("/logged/near")}>
          <Text style={styles.buttonText}>Enregistrer votre position actuelle</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>
          Nous utilisons votre position pour vous proposer les dépôts les plus proches
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 128, 128, 0.3)', // Cercle extérieur transparent
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#008080', // Cercle central
  },
  bottomSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // height:246,
    
  },
  button: {
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    alignContent:"center",
    marginLeft:"10%",
    width:"70%"
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LocationScreen;
