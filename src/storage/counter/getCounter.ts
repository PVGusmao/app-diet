import AsyncStorage from "@react-native-async-storage/async-storage";

import { ONDIETCOUNTER } from "@storage/config/storageConfig";

export async function getCounter() {
  try {
    const response = await AsyncStorage.getItem(ONDIETCOUNTER);
    const data = JSON.parse(response as string);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}