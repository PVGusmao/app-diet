import AsyncStorage from "@react-native-async-storage/async-storage";

import { REGISTRATION } from "../config/storageConfig";

export async function getAllRegistration() {
  try {
    const response: string | null = await AsyncStorage.getItem(REGISTRATION);

    const storage = JSON.parse(response as any);

    return storage;
  } catch (error) {
    throw error;
  }
}
