import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Near(){
    const depot = [
        {
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },{
            title:"Dépôt X",
            ville:'Yop maroc',
            distance:"1km"
        },
    ]
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.PrimaryText}>Dépôts à proximité</Text>
                <Text style={styles.secondaryText}>Sélectionnez un dépôt de gaz</Text>
            </View>
            <ScrollView>
                {depot.map((data,index)=>(
                    <TouchableOpacity key={index} onPress={()=>router.push("/logged/selected")}>
                    <View  style={styles.Boxed}>
                        <View>
                            <Text style={styles.coloredText}>{data.title}</Text>
                            <Text style={styles.secondaryText}>{data.ville}</Text>
                            <Text style={styles.secondaryText}><Ionicons name="location" size={14} color="black" />{data.distance}</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
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
    },header:{
        marginBottom:10
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
    coloredText:{
        color:"#1D9A94",
        fontSize:16,
        fontWeight:500,
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
    }
})