import AsyncStorage from '@react-native-async-storage/async-storage';

// Enregistrer une valeur
const storeData = async (key:string, value:any) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Values',value);
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement', error);
  }
};

// Lire une valeur
const getData = async (key:string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // console.log('Valeur récupérée:', value);
      return value;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération', error);
  }
};


// Lire une valeur
const deleteAll = async () => {
  try {
    await AsyncStorage.clear();
    
      // console.log('Valeur récupérée:', value);
      return true;
    
  } catch (error) {
    console.error('Erreur lors de la récupération', error);
    return false;
  }
};


export {storeData,getData,deleteAll}
