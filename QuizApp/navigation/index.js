import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, QuizScreen, ResultScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Quiz' component={QuizScreen} />
            <Stack.Screen name='Result' component={ResultScreen} />
        </Stack.Navigator>
    )
}

export default MyStack;