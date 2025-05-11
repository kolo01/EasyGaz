import { db, firestore } from "@/lib/firebase.";
import { doc, setDoc } from "firebase/firestore";


const saveProduct = (data: any, location: any, id: any, type?: any) => {
  setDoc(doc(firestore, location , id), data).then((res) => alert(`${type} bien ajouté`)).catch((err)=>{
    alert("Une erreur est survenu lors de l'enregistrement")
  })
};

export {saveProduct}