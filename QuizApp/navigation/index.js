import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, QuizScreen, ResultScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false, statusBarColor: '#996400' }} />
            <Stack.Screen name='Quiz' component={QuizScreen} options={{ headerShown: false, statusBarColor: '#996400' }} />
            <Stack.Screen name='Result' component={ResultScreen} options={{ headerShown: false, statusBarColor: '#996400' }} />
        </Stack.Navigator>
    )
}

export default MyStack;