import { View, Text, TouchableOpacity } from 'react-native'

import React, { useEffect, useState } from 'react'


const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export default function QuizScreen({ navigation }) {

    const [questions, setQuestions] = useState();
    const [questionNumber, setQuestionNumber] = useState(0);
    const [options, setOptions] = useState([])
    const [score, setScore] = useState(0)

    const getData = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results)
        setOptions(generateShuffledOptions(data.results[0]))
    }

    useEffect(() => {
        getData()
    }, [])


    const handleNextPress = () => {
        setQuestionNumber(questionNumber + 1)
        setOptions(generateShuffledOptions(questions[questionNumber + 1]))
    }


    const generateShuffledOptions = (_questions) => {
        const options = [..._questions.correct_answer]
        options.push(_questions.correct_answer)
        shuffle(options)
        return options
    }
    return (
        <>
            {questions && (
                <View>
                    <View className='mx-1 my-16'>

                        <Text className='text-2xl font-semibold text-black'>Q{questionNumber + 1}. {decodeURIComponent(questions[questionNumber].question)}</Text>
                    </View>
                    <View className='my-8 space-y-3 mx-2 '>
                        <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg rounded-lg'>{decodeURIComponent(options[0])}</Text></TouchableOpacity>

                        <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg rounded-lg'>{decodeURIComponent(options[1])}</Text></TouchableOpacity>

                        <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg rounded-lg'>{decodeURIComponent(options[2])}</Text></TouchableOpacity>

                        <TouchableOpacity><Text className='bg-yellow-700 text-white px-2 py-2 mx-2 text-lg rounded-lg'>{decodeURIComponent(options[3])}</Text></TouchableOpacity>
                    </View>
                    <View className='flex flex-row justify-around my-24'>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                            <Text className='text-white rounded-lg p-3 text-xl bg-yellow-700 w-28 text-center'>Previous</Text>
                        </TouchableOpacity>

                        {questionNumber < 9 ? (
                            <TouchableOpacity onPress={handleNextPress}>
                                <Text className='text-white rounded-lg p-3 text-xl bg-yellow-700 w-28 text-center'>Next</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity >
                                <Text className='text-white rounded-lg p-3 text-xl bg-yellow-700 w-28 text-center'>Submit</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}

        </>
    )
}