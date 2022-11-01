import AsyncStorage from "@react-native-async-storage/async-storage";

import { ONDIETCOUNTER } from "@storage/config/storageConfig";

import { getCounter } from "./getCounter";

export async function setCounter(isDietOrNot: boolean | null) {
  try {

    let data = await getCounter();

    if (!data) {
      await AsyncStorage.setItem(ONDIETCOUNTER, JSON.stringify(0));
    } 
    
    if (isDietOrNot) {
      data += 1;
      console.log(data);
      await AsyncStorage.setItem(ONDIETCOUNTER, JSON.stringify(data));
    } else {
      await AsyncStorage.setItem(ONDIETCOUNTER, JSON.stringify(0));
    }
} catch (error) {
    throw error;
  }
}