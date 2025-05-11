import React from "react";
import {
  StyleSheet,
  View,
  
  ScrollView,
} from "react-native";
import {  Ionicons } from "@expo/vector-icons";
import {  router } from "expo-router";

import {  Avatar, Input, Select, Text,  XStack,  YStack } from "tamagui";
import RNPickerSelect from 'react-native-picker-select';

export default function Compte() {




  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="chevron-back"
          onPress={() => router.back()}
          style={{
            backgroundColor: "#ECF0F4",
            borderRadius: 25,
            padding: 2,
          }}
          size={24}
          color="#181C2E"
        />
        
        <Text fontWeight={400} fontSize={18}color={"#1E4D63"} onPress={()=>{alert("Impossible d'enregistrer les modifications")}}>Enregistrer </Text>
        
      </View>

      {/* QR Code Section */}
      <ScrollView >
        <XStack justifyContent="center" marginTop={20}>
      <Avatar  circular size={150}>
        <Avatar.Image
          accessibilityLabel="Nate Wienert"
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
        />
        <Avatar.Fallback delayMs={600} backgroundColor={"blue"} />
      </Avatar>
      </XStack>

      <YStack gap={15} marginTop={40}>
        {/* Nom, prenoms,username, uid,tel, email */}
        <YStack gap={5}>
            
            <Input backgroundColor={"#d0e3ed"} borderRadius={15} paddingHorizontal={20} color={"black"} fontWeight={600} fontSize={16} borderWidth={0} value={"Harden Peters"} readOnly/>
            <Text fontSize={15} fontWeight={700}>Nom</Text>
        </YStack>
        <YStack gap={5}>
            <Input backgroundColor={"#d0e3ed"} borderRadius={15} paddingHorizontal={20} color={"black"} fontWeight={600} fontSize={16} borderWidth={0} value={"Hardpeters@gmail.com"} readOnly/>
            <Text fontSize={15} fontWeight={700}>Email</Text>

        </YStack>
        <YStack gap={5}>
            <Input backgroundColor={"#d0e3ed"} borderRadius={15}  paddingHorizontal={20} color={"black"} fontWeight={600} fontSize={16} borderWidth={0} value={"**********"}  secureTextEntry={true}/>
            <Text fontSize={15} fontWeight={700}>Mot de Passe</Text>

        </YStack>
        <YStack gap={5}>
            <Input backgroundColor={"#d0e3ed"} borderRadius={15} paddingHorizontal={20} color={"black"}  fontWeight={600} fontSize={16} borderWidth={0} value={"23/05/1999"} readOnly/>
            <Text fontSize={15} fontWeight={700}>Date de Naissance</Text>

        </YStack>
        <YStack gap={5}>
            {/* <select>
                <option>Abidjan</option>
                <option>Yamoussoukro</option>
                <option>Port Bouet</option>
                <option>Jacqueville</option>
                <option>Man</option>
                <option>San Pedro</option>
                <option>Grand Bassam</option>
            </select> */}
             <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'Abidjan', value: 'Abidjan' },
        { label: 'Yamoussoukro', value: 'Yamoussoukro' },
        { label: 'Man', value: 'Man' },
        { label: 'Jacqueville', value: 'Jacqueville' },
        { label: 'Port Bouet', value: 'Port Bouet' },
        { label: 'Grand Bassam', value: 'Grand Bassam' },
      ]}
    />
            <Text fontSize={15} fontWeight={500}>Pays/Region</Text>

        </YStack>
       

      </YStack>
      </ScrollView>

      {/* Footer Navigation */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal:20,
    paddingTop:50
  },
  header: {
    justifyContent:"space-between",
    flexDirection: "row",
    alignItems: "center",
    gap:20, 
    paddingTop: 20,
  }
});
