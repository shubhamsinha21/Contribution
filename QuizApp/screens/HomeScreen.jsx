import { View, Text, TouchableOpacity } from 'react-native'
import { Title, Banner, Button } from '../components'

export default function HomeScreen({ navigation }) {

    const welcomeImg = require('../assets/welcome.png')

    return (
        <>
            <Title title='HistoryQuest' />
            <Banner banner={welcomeImg} />
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <Button btnText='Start The Quest' />
            </TouchableOpacity>
        </ >
    )
}