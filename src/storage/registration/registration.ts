import AsyncStorage from "@react-native-async-storage/async-storage";

import { REGISTRATION } from "@storage/config/storageConfig";

export async function registration(registration: string) {
  try {
    await AsyncStorage.setItem(REGISTRATION, registration);
  } catch(error) {

  }
}