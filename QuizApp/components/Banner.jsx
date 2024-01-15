import { View, Text, Image } from 'react-native'
import React from 'react'

const Banner = ({ banner }) => {
    return (
        <View className='flex-1 items-center my-36'>
            <Image source={banner}
                className="w-96 h-56 animate-bounce"
            />
        </View>
    )
}

export default Banner