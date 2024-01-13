import { View, Text, TouchableOpacity } from 'react-native'
import Options from '../components/Options'
import React from 'react'

export default function QuizScreen() {
    return (
        <>
            <View className='mx-1 my-16'>
                <Text className='text-2xl font-semibold text-black'>Instead of div, what we use in react native ?</Text>
            </View>
            <Options />
            <View className='flex flex-row justify-around my-24'>
                <TouchableOpacity>
                    <Text className='text-white rounded-lg p-3 text-xl bg-yellow-700 w-28 text-center'>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className='text-white rounded-lg p-3 text-xl bg-yellow-700 w-28 text-center'>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}