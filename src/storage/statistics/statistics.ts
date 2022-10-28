import AsyncStorage from "@react-native-async-storage/async-storage";

import { STATISTICS } from "@storage/config/storageConfig";

import Stats from "src/interface/stats.interface";

type Props = {
  status: Stats;
}

export async function Status(status: Props) {
  try {
    
    await AsyncStorage.setItem(STATISTICS, JSON.stringify(status));

  } catch (error) {
    throw error;
  }
}