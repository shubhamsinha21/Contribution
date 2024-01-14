import { View, Text, Image, TouchableOpacity } from 'react-native'
import Title from '../components/Title'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
        <>
            <Title />
            <View className='flex-1 items-center'>
                <Image source={require('../assets/home-image.png')}
                    className="w-96 h-96 my-8"
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                    <Text
                        className='text-xl font-semibold bg-yellow-700 text-white mx-auto p-2 my-32 rounded-sm'>Take a Quiz</Text>
                </TouchableOpacity>
            </View>
        </ >
    )
}