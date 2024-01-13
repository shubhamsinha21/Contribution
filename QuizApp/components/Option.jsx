import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Option() {
    return (
        <View className='my-8 space-y-3 flex-1'>
            <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg w-56 rounded-lg'>Text</Text></TouchableOpacity>

            <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg w-56 rounded-lg'>Text</Text></TouchableOpacity>

            <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg w-56 rounded-lg'>Text</Text></TouchableOpacity>

            <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg w-56 rounded-lg'>Text</Text></TouchableOpacity>
        </View>
    )
}