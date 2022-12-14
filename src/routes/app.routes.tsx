import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/Home';
import NewMeal from '@screens/NewMeal';
import Statistics from '@screens/Statistcs';
import FeebackCreation from '@screens/FeedbackCreation';
import DetailsScreen from '@screens/DetailsScreen';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    // screenOptions={ { headerShown: false, animation: 'slide_from_bottom' } }
    <Navigator screenOptions={ { headerShown: false } }>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics as any} />
      <Screen options={{ animation: 'slide_from_bottom' }} name="newMeal" component={NewMeal} />
      <Screen options={{ animation: 'fade' }} name="feedbackCreation" component={FeebackCreation} />
      <Screen options={{ animation: 'fade' }} name="detailsScreen" component={DetailsScreen} />
    </Navigator>
  )
}