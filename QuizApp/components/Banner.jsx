import { View, Text, Image } from 'react-native'
import React from 'react'

const Banner = ({ banner }) => {
    return (
        <View className='flex-1 items-center my-12'>
            <Image source={banner}
                className="w-96 h-96 animate-bounce cursor-pointer"
            />
        </View>
    )
}

export default Banner