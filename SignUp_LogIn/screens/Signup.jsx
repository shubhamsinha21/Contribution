import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

const SignUp = ({ navigation }) => {

    //states
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})

    const [suggestions, setSuggestions] = useState([])
    const [strength, setStrength] = useState('')

    // form validator
    const validateForm = () => {
        let errors = {}

        if (!firstname) {
            errors.firstname = 'firstname is required'
        }
        if (!lastname) {
            errors.lastname = 'lastname is required'
        }
        if (!email) {
            errors.email = 'email is required'
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!password) {
            errors.password = 'password is required'
        }

        setErrors(errors)
        return Object.keys(errors).length === 0;
    }

    //password validator
    const validatePassword = (input) => {
        let newSuggestions = []
        if (input.length < 8) {
            newSuggestions.push('Password should be atleast 8 characters')
        }
        if (!/\d/.test(input)) {
            newSuggestions.push('Password must contain atleast one number')
        }
        if (!/[A-Z]/.test(input) || !/[a-z]/.test(input)) {
            newSuggestions.push('Include both uppercase and lowercase letters')
        }
        if (!/[^A-Za-z0-9]/.test(input)) {
            newSuggestions.push('Include atleast one special characters')
        }

        setSuggestions(newSuggestions)

        // password strength
        if (newSuggestions.length === 0) {
            setStrength('Very Strong');
        }
        else if (newSuggestions.length <= 1) {
            setStrength('Strong')
        }
        else if (newSuggestions.length <= 3) {
            setStrength('Moderate')
        }
        else if (newSuggestions.length <= 5) {
            setStrength('Weak')
        }
        else {
            setStrength('Too Weak')
        }
    }



    // submit
    const handleSubmit = () => {
        if (validateForm()) {
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setErrors({})
            console.warn("Submitted 🎉")

        }
    }


    return (
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.header}>Lets Create a <Text style={styles.head}>SignUp Form</Text></Text>

                    <TextInput
                        placeholder='Your Firstname'
                        onChangeText={setFirstName}
                        value={firstname}
                        style={styles.inputBox}
                    />
                    {errors.firstname ? <Text style={styles.error}>{errors.firstname}</Text> : null}

                    <TextInput
                        placeholder='Your Lastname'
                        onChangeText={setLastName}
                        value={lastname}
                        style={styles.inputBox}
                    />
                    {errors.lastname ? <Text style={styles.error}>{errors.lastname}</Text> : null}

                    <TextInput
                        placeholder='Your Email'
                        onChangeText={setEmail}
                        value={email}
                        style={styles.inputBox}
                    />
                    {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

                    <TextInput
                        placeholder='Your Password'
                        onChangeText={(text) => {
                            setPassword(text), validatePassword(text)
                        }}
                        value={password}
                        secureTextEntry={true}
                        style={styles.inputBox}
                    />
                    {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
                    {password ? <Text style={styles.password}>Password Strength : {strength}</Text> : null}

                    <Text>
                        {password ? suggestions.map((suggestions, index) => (
                            <Text style={styles.suggestions} key={index}>{index + 1}. {suggestions} {'\n'}</Text>
                        )) : null}
                    </Text>

                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>

                    <View style={styles.loginPage}>
                        <Text style={styles.login}>Already Registered 🤔</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.login}>Login Here 🤚🏻</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}


// styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 800
    },
    form: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'purple',
        marginBottom: 50
    },
    head: {
        fontWeight: '800',
        fontSize: 30,
        color: 'orange',
    },
    inputBox: {
        marginBottom: 4,
        borderRadius: 8,
        color: 'purple',
        fontSize: 18,
    },
    loginPage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    login: {
        fontWeight: '700',
        fontSize: 15,
        color: 'orange',
    },
    error: {
        color: 'red',
        marginBottom: 0,
        textAlign: 'left'
    },
    submit: {
        backgroundColor: 'orange',
        alignSelf: 'center',
        padding: 8,
        borderRadius: 10,
        color: 'purple',
        fontWeight: '700',
        width: 80,
        textAlign: 'center'
    },
    suggestions: {
        color: 'green',
    },
    password: {
        color: 'green',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8
    }


})

export default SignUp