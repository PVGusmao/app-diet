import AsyncStorage from "@react-native-async-storage/async-storage";

import { STATISTICS } from "@storage/config/storageConfig";

export async function getStatistics() {
  try {
    const response = await AsyncStorage.getItem(STATISTICS);
    const data = JSON.parse(response as string);

    return data;
  } catch (error) {
    throw error;
  }
}