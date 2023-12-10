import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import Exstyles from './Styles';

export default function App() {

  const [displayValue, setDisplayValue] = useState(0);
  const [operator, setOperator] = useState(null);

  const handleInputButton = (num) => {
    if (displayValue === 0) {
      setDisplayValue(num.toString());
    }
    else {
      setDisplayValue(displayValue + num);
    }
  }

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setDisplayValue(0);
  }

  return (

    <View style={Exstyles.container}>
      <View style={Exstyles.displayContainer}>
        <Text style={Exstyles.displayText}>
          {displayValue}
        </Text>
      </View>

      <View style={Exstyles.buttonContainer}>
        <View style={Exstyles.row}>
          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(7)}
          >
            <Text style={Exstyles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(8)}
          >
            <Text style={Exstyles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(9)}
          >
            <Text style={Exstyles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={() => handleInputButton('/')}
          >
            <Text style={[Exstyles.buttonText, Exstyles.operatorButtonText]} onPress={() => handleOperatorInput}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={Exstyles.row}>
          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(7)}
          >
            <Text style={Exstyles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(8)}
          >
            <Text style={Exstyles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(9)}
          >
            <Text style={Exstyles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={() => handleInputButton('/')}
          >
            <Text style={[Exstyles.buttonText, Exstyles.operatorButtonText]} onPress={() => handleOperatorInput}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={Exstyles.row}>
          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(7)}
          >
            <Text style={Exstyles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(8)}
          >
            <Text style={Exstyles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Exstyles.button}
            onPress={() => handleInputButton(9)}
          >
            <Text style={Exstyles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={() => handleInputButton('/')}
          >
            <Text style={[Exstyles.buttonText, Exstyles.operatorButtonText]} onPress={() => handleOperatorInput}>÷</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}