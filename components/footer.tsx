import { getData } from "@/lib/mmkv"
import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { View } from "tamagui"

export default function Footr() {
  const [type, setType] = useState("user")
  const getType = async () => {
    const getted: any = await getData("type")
    setType(getted)
  }
  useEffect(() => {
    getType()
  }, [])

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => { type == "seller" ? router.push("/seller") : router.push("/logged") }}>
        <Ionicons name="home" size={24} color="#fff" />
      </TouchableOpacity>
      {type == "seller" ?
        <TouchableOpacity onPress={() => router.push("/seller/yourStock")}>

          {/* <Entypo name="location-pin" size={24} color="#fff" /> */}
          <Entypo name="shop" size={24} color="#fff" />
        </TouchableOpacity>
        : <TouchableOpacity onPress={() => router.push("/logged/map")}>

          <Entypo name="location-pin" size={24} color="#fff" />
        </TouchableOpacity>}
        {type == "seller" ?
        <TouchableOpacity onPress={() => alert("Bientôt disponible")}>
        <Entypo name="pie-chart" size={24} color="#fff" />
      </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => alert("Bientôt disponible")}>
        <Entypo name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
      }
      <TouchableOpacity onPress={() => router.push("/logged/compte")}>

        {/* <MaterialCommunityIcons name="account" size={24} color="#fff"  /> */}
        <Ionicons name="settings-sharp" size={24} color="#fff" />
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create(

  {
    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#1D9A94",
      paddingVertical: 16,
    }
  }
)