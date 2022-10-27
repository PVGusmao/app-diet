import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/config/storageConfig";

export async function removeAllMeal() {
  try {
    const data: any = await AsyncStorage.getItem(MEAL_COLLECTION);
    console.log(JSON.parse(data));

    // await AsyncStorage.removeItem(MEAL_COLLECTION);
    // await AsyncStorage.setItem(MEAL_COLLECTION, '[]');
    
  } catch (error) {
    throw error;
  }
}