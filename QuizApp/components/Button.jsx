import { View, Text } from 'react-native'
import React from 'react'

const Button = ({ btnText }) => {
    return (
        <View>
            <Text className='text-xl font-semibold bg-yellow-700 text-white mx-auto my-24 p-4 rounded-lg '>
                {btnText}
            </Text>
        </View>
    )
}

export default Button