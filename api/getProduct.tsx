import {db,  firestore } from "@/lib/firebase.";
import { onValue, ref } from "firebase/database";
import { collection, getDocs, onSnapshot } from "firebase/firestore";


const getProductList = async ( location: string): Promise<any> => {
    try {
        const querySnapshot = await getDocs(collection(firestore, location));
        const datas = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        if (datas.length > 0) {
            console.log("datas", datas);
            return datas;
        } else {
            console.warn("La collection est vide.");
            return [];
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return [];
    }
};

const getProductListByUsers = (location:any, userId:any) => {
    const starCountRef = ref(db, );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
    });
}

const getOneProduct = (location:any, productID:any) =>{
    const starCountRef = ref(db, location+"/"+productID);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
    });
}



export {getOneProduct,getProductList,getProductListByUsers}