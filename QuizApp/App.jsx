import React from 'react'
import { View, Text } from 'react-native'

function App() {

  const qoute = "Days are light, Nights are dark. Struggle is hard, Victory is bright."
  return (
    <View className="bg-black w-64 h-24 p-6 flex justify-center m-auto">
      <Text className=" text-white text-4xl font-bold">Quiz app</Text>
      <Text className="text-white text-xl font bold">is great! {qoute}</Text>
    </View>
  )
}

export default App