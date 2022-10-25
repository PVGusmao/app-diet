import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/Home';
import Statistics from '@screens/Statistcs';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    <Navigator screenOptions={ { headerShown: false } }>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}