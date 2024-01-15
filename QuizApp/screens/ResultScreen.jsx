import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Title, Banner, Button } from '../components'

export default function ResultScreen({ route, navigation }) {

    const { score } = route.params;
    const bannerDisplay = score > 60 ? require('../assets/victory.png') : require('../assets/lost.png')

    return (
        <>
            <Title title='Result' />
            <Text className='font-bold text-xl text-yellow-700 text-center'>Score :{score}</Text>
            <Banner banner={bannerDisplay} />
            <View className='flex justify-right'>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Button btnText='Back To Home' />
                </TouchableOpacity>
            </View>
        </>
    )
}