import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ResultScreen({ route }) {

    const { score } = route.params;
    return (
        <>
            <Text className='text-3xl font-bold text-black'>Result:{score}</Text>
            <View className='flex-1 items-center'>
                <Image source={require('../assets/home-image.png')}
                    className="w-96 h-96 my-8"
                />
            </View>
        </>
    )
}