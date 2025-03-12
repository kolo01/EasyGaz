import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "tamagui";

export default function Selected(){
    const itemsDispo = [
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        {
            title:"Bouteille 6kg",
            emplacement:'Rue des jardins',
            prix:"5000 FCFA",
            image:"@/assets/imageFigma/bouteille.png"
        },
        
    ]
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                <Text style={styles.PrimaryText}>Dépôt X</Text>
                <Text style={styles.secondaryText}>yop maroc</Text>
                </View>
                <Feather style={styles.refresh} name="refresh-ccw" size={24} color="black" />
            </View>
            <ScrollView>
                {itemsDispo.map((data,index)=>(
                    <TouchableOpacity key={index} onPress={()=>router.push("/logged/details")}>
                    <View  style={styles.Boxed}>
                        <Image source={require("@/assets/imageFigma/bouteille.png")} style={styles.image}/>
                        <View>
                            <Text style={styles.secondaryTextBold}>{data.title}</Text>
                            <Text style={styles.secondaryText}>{data.emplacement}</Text>
                            <Text style={styles.coloredText}>{data.prix}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>router.push("/logged/details")}>
                            <Button backgroundColor={"#1D9A94"} borderRadius={4} padding={10} color={"white"} >Commander</Button>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal:20,
        paddingTop:40
    }, header:{
        marginBottom:10,
        display:"flex",
        flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center"
    },
    PrimaryText:{
        color:"#626262",
        fontSize:18,
        fontWeight:600,
    },
    secondaryText:{
        color:"#626262",
        fontSize:14,
        fontWeight:400,
    },
    secondaryTextBold:{
        color:"#626262",
        fontSize:16,
        fontWeight:500,
    },
    coloredText:{
        color:"#1D9A94",
        fontSize:16,
        fontWeight:600,
    }, Boxed:{
        display:"flex",
        flexDirection:"row",
         justifyContent:"space-between",
        //  shadowColor:"black",
        borderWidth:1,
        borderColor:"#FFF",
        padding:10,
        alignItems:"center",
        borderRadius:8,
         shadowColor: 'lightgray',
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.2,
         shadowRadius: 8,
         elevation: 1,
         marginVertical:10
    },
    refresh:{
        backgroundColor:"#F6F6F6",       
    },
    image:{
        resizeMode:"contain",
        width:80,
        height:80
    }
})