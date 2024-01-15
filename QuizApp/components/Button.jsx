import { View, Text } from 'react-native'
import React from 'react'

const Button = ({ btnText }) => {
    return (
        <View>
            <Text className='text-xl font-semibold bg-yellow-700 text-white mx-auto my-32 p-4 rounded-lg cursor-pointer'>
                {btnText}
            </Text>
        </View>
    )
}

export default Button