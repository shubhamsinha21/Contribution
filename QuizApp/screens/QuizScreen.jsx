import { View, Text, TouchableOpacity } from 'react-native'
import Option from '../components/Option'
import React, { useState } from 'react'

export default function QuizScreen({ navigation }) {

    const [questions, setQuestions] = useState();
    const getData = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
        const res = await fetch(url);
        console.log(res)
    }

    return (
        <>
            <View className='mx-1 my-16'>
                <Text className='text-2xl font-semibold text-black'>Instead of div, what we use in react native ?</Text>
            </View>
            <Option />
            <View className='flex flex-row justify-around my-24'>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <Text className='text-white rounded-lg p-3 text-xl bg-yellow-700 w-28 text-center'>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className='text-white rounded-lg p-3 text-xl bg-yellow-700 w-28 text-center'>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}