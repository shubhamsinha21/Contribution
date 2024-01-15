import { View, Text } from 'react-native'
import React from 'react'

const Title = ({ title }) => {
    return (
        <View className='my-8'>
            <Text className='font-bold text-4xl text-yellow-700 text-center'>{title}</Text>
        </View>
    )
}

export default Title