import AsyncStorage from "@react-native-async-storage/async-storage";

import { REGISTRATION } from "../config/storageConfig";

export async function getAllRegistration() {
  try {
    const response = await AsyncStorage.getItem(REGISTRATION);

    const storage = JSON.parse(response as string);

    return storage;
  } catch (error) {
    throw error;
  }
}
