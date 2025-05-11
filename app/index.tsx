import { RelativePathString, router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  setTimeout(() => {
    router.push("/slide/" as RelativePathString); 
  }, 2000); 

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#D3F6FC"
      }}
    >
      
      <Image style={{resizeMode:"contain", width:243,height:243}} source={require("../assets/imageFigma/logo.png")} />
      
    </View>
  );
}
