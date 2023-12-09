import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function NewPassword({ navigation }) {

    const [errors, setErrors] = useState('')
    const [password, setPassword] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [strength, setStrength] = useState('')

    //form validator
    const validateForm = () => {
        let errors = ''

        if (!password) {
            errors.password = 'password is required'
        }
        setErrors(errors)
        return Object.keys(errors).length === 0;
    }

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
            setPassword('')
            setErrors({})
            console.warn("Password Reset 🎉")

        }
    }

    return (
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.header}> <Text style={styles.head}>New Password</Text></Text>


                    <TextInput
                        placeholder='Your Password'
                        onChangeText={(text) => { setPassword(text), validatePassword(text), validateForm(text) }}
                        value={password}
                        style={styles.inputBox}
                        secureTextEntry={true}
                    />

                    <Text style={styles.password}>Password Strength : {strength}</Text>
                    <Text>
                        {password ? suggestions.map((suggestions, index) => (
                            <Text style={styles.suggestions} key={index}>{index + 1}. {suggestions} {'\n'}</Text>
                        )) : null}
                    </Text>

                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>

                    <View style={styles.loginPage}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={styles.login}>Back to Signup</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.login}>Login</Text></TouchableOpacity>
                    </View>

                </View >
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 800,
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
        marginBottom: 8,
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
    submit: {
        backgroundColor: 'orange',
        alignSelf: 'center',
        padding: 8,
        borderRadius: 10,
        color: 'purple',
        fontWeight: '700',
        marginTop: 10,
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