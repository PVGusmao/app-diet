import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../config/storageConfig";

export async function getAllMeal() {
  try {
    const response = await AsyncStorage.getItem(MEAL_COLLECTION);
    const storage = JSON.parse(response as string);
    return storage;
  } catch (error) {
    throw error;
  }
}
