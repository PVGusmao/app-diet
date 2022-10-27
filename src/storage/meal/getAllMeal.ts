import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "./storageConfig";

export async function getAllMeal() {
  try {
    const response: string | null = await AsyncStorage.getItem(MEAL_COLLECTION);
    const storage = JSON.parse(response as any);
    return storage;
  } catch (error) {
    throw error;
  }
}
