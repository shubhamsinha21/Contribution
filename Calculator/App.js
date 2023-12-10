import { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Exstyles from './Styles';

export default function App() {

  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState();
  const [firstValue, setFirstValue] = useState('');


  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (

    <View style={Exstyles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='black' />
      <View style={Exstyles.displayContainer}>
        <Text style={Exstyles.displayText}>

          {displayValue}
        </Text>
      </View>
      <View style={Exstyles.buttonContainer}>
        <View style={Exstyles.row}>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(7)}
          >
            <Text style={Exstyles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(8)}
          >
            <Text style={Exstyles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(9)}
          >
            <Text style={Exstyles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={() => handleOperatorInput('/')}
          >
            <Text style={[
              Exstyles.buttonText,
              Exstyles.operatorButtonText
            ]}>
              ÷
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Exstyles.row}>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(4)}
          >
            <Text style={Exstyles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(5)}
          >
            <Text style={Exstyles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(6)}
          >
            <Text style={Exstyles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={() => handleOperatorInput('*')}
          >
            <Text style={[
              Exstyles.buttonText,
              Exstyles.operatorButtonText
            ]}>
              ×
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Exstyles.row}>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(1)}
          >
            <Text style={Exstyles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(2)}
          >
            <Text style={Exstyles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Exstyles.button}
            onPress={() => handleNumberInput(3)}
          >
            <Text style={Exstyles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={() => handleOperatorInput('-')}
          >
            <Text style={[
              Exstyles.buttonText,
              Exstyles.operatorButtonText
            ]}>
              −
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Exstyles.row}>
          <TouchableOpacity
            style={[Exstyles.button, Exstyles.zeroButton]}
            onPress={() => handleNumberInput(0)}
          >
            <Text style={[
              Exstyles.buttonText,
              Exstyles.zeroButtonText
            ]}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={() => handleOperatorInput('+')}
          >
            <Text style={[
              Exstyles.buttonText,
              Exstyles.operatorButtonText
            ]}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={handleEqual}
          >
            <Text style={[
              Exstyles.buttonText,
              Exstyles.clearButtonText
            ]}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Exstyles.button, Exstyles.operatorButton]}
            onPress={handleClear}>
            <Text style={[
              Exstyles.buttonText,
              Exstyles.clearButtonText
            ]}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}