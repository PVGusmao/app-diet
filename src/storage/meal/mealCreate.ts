import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "./storageConfig";

type Props = {
  name: string;
  description: string;
  date: string;
  hour: string;
  dietOrNot: boolean;
}

export async function mealCreate({ name, description, date, hour, dietOrNot }: Props) {
  try {
    const mealDetails = {
      name,
      description,
      hour,
      dietOrNot,
    }

    const response: string | null = await AsyncStorage.getItem(MEAL_COLLECTION);
    const storage = JSON.parse(response as any);

    if (!storage) {
      const meals = [{
        date: date,
        data: []
      }]
      
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))

    } else if (storage.date === date){
      const mealObj = storage.find((element: any) => element.date === date);
      mealObj.data.push(mealDetails);

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage))

    } else {
      const obj = {
        date,
        data:[mealDetails]
      }

      storage.push(obj);

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
      
    }





  } catch (error) {
    throw error;
  }
}