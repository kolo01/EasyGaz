import { auth, db, firestore } from "@/lib/firebase."
import { deleteAll, getData, storeData } from "@/lib/mmkv"
import { router } from "expo-router"
import { createUserWithEmailAndPassword, onAuthStateChanged, RecaptchaVerifier, sendEmailVerification, signInWithEmailAndPassword, signInWithPhoneNumber, signOut } from "firebase/auth"
import { onValue, ref, set } from "firebase/database"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { Alert } from "react-native"
import Toast from "react-native-toast-message"


const register = (name: any, surname: any, email: any, password: any, role: any) => {

    createUserWithEmailAndPassword(auth, email, password).then((res) => {
        setDoc(doc(firestore, "users", res.user.uid), {
            name, surname, email, role
        }).then((response) => {
            console.log("Actuelle", auth.currentUser)
            auth.currentUser && sendEmailVerification(auth.currentUser);
            Alert.alert(`Bienvenue ${name}`, "compte créé avec succès, veuillez verifier votre mail afin de valider l'inscription");
            router.push('/login');
        }).catch((err) => {
            Alert.alert("Erreur inattendu", "Veuillez reessayer plus tard ou tenter de vous connecter")
        })
    }).catch((error) => {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
            Alert.alert("Duolication de compte", "Votre Email existe déjà")
        } else {
            Alert.alert("Erreur inattendu", "Veuillez  reessayer, si le problème persiste veuillez contacter un administrateur")
        }
    })


}


const login = (email: any, password: any) => {
    signInWithEmailAndPassword(auth, email, password).then( async(res) => {
        console.log(res.user)
        if (res.user.emailVerified) {
           const snapshot = await getDoc(doc(firestore,"users", res.user.uid))
           if (snapshot.exists()) {

            // 
            console.log(snapshot.data())
            if (snapshot.data().role == "seller") {
                router.push({pathname:"/seller",params:{user:JSON.stringify(snapshot.data()), client_id: res.user.uid}})
            }else{
               
                    router.push({pathname:"/logged",params:{user:JSON.stringify(snapshot.data()), client_id: res.user.uid}})
               
            }
          } else {
            
            console.log("No such document!");
          }
           
        } else {
            Alert.alert("Email non verifié", "Veuillez verifier votre Email svp!!")
        }

    }).catch((err) => {
        Alert.alert('Erreur inattendu', "impossible de se connecter, veuillez reessayer")
    })
}




const isConnected = () => {
    const user = getData("user")
    console.log(user)
    // onAuthStateChanged(auth, (user) => {
    //     if (!user) {
    //         // const disco:any= deleteAll()

    //         if (disco) {
    //         console.log("Decoonnecté")

    //         router.push("/login")
    //        }

    //     }
    //   });
}

const removeReturn = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            router.push("/logged")
        }
    });
}


const logout = () => {
    signOut(auth).then(() => {
        Alert.alert("Deconnexion", "Deconnecté avec succes")
    }).catch((err) => {
        Alert.alert("Erreur detectée", "Veuillez reesayer plus tard")
    })
}



export { register, login, isConnected, logout, removeReturn }