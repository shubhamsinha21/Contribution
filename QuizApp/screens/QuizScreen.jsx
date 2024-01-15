import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Title } from '../components';

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
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        setIsLoading(true)
        try {
            const url = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple&encode=url3986';
            const res = await fetch(url);
            const data = await res.json();

            if (data.results && data.results.length > 0) {
                setQuestions(data.results);
                setOptions(generateShuffledOptions(data.results[0]));
            } else {
                console.error("No questions found in the response.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setIsLoading(false)
    };

    useEffect(() => {
        getData();
    }, []);

    const handleNext = () => {
        setQuestionNumber(questionNumber + 1);
        setOptions(generateShuffledOptions(questions[questionNumber + 1]));
        setSelectedOption(null)
    };

    const handleSkip = () => {
        setQuestionNumber(questionNumber + 1);
        setOptions(generateShuffledOptions(questions[questionNumber + 1]));
        setSelectedOption(null)
    }

    const generateShuffledOptions = (_questions) => {
        const options = [..._questions.incorrect_answers];
        options.push(_questions.correct_answer);
        shuffle(options);
        return options;
    };

    const handleSelectedOption = (_option) => {
        if (_option === questions[questionNumber].correct_answer) setScore(score + 10);
        setSelectedOption(_option)
    };

    const handleQuizSubmission = () => {
        navigation.navigate('Result', { score })
    }
    return (
        <>
            {isLoading ? <View className='flex justify-center items-center my-auto'>
                <Title title='Loading...' />
                <ActivityIndicator size={200} color='#996400' />
            </View> : questions && (
                <View className='mx-2'>
                    <View className='my-8 h-24 mx-1'>
                        <Text className='text-2xl font-semibold text-black'>
                            Q{questionNumber + 1} . {decodeURIComponent(questions[questionNumber].question)}
                        </Text>
                    </View>
                    <View className='flex justify-center my-16 space-y-3 h-60 '>
                        {options.map((option, index) => (
                            <TouchableOpacity key={index} onPress={() => handleSelectedOption(option)}
                            >
                                <Text
                                    style={{ backgroundColor: selectedOption !== option ? '#996400' : 'red' }}
                                    className='text-white p-3 mx-2 text-lg rounded-lg'>
                                    {decodeURIComponent(option)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View className='flex flex-row justify-between mx-4 my-4'>

                        <TouchableOpacity onPress={handleSkip}>
                            <Button btnText='Skip' />
                        </TouchableOpacity>

                        {questionNumber < 9 ? (
                            <TouchableOpacity onPress={handleNext}>
                                <Button btnText='Next' />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={handleQuizSubmission}>
                                <Button btnText='Submit' />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
        </>
    );
}
