import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function ResetPassword({ navigation }) {

    const [email, setEmail] = useState('')

    return (
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.header}> <Text style={styles.head}>Reset Password</Text></Text>

                    <TextInput
                        placeholder='Your Email'
                        onChangeText={setEmail}
                        value={email}
                        style={styles.inputBox}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
                        <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>

                    <View style={styles.loginPage}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={styles.login}>Back to Signup</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.login}>Back to Login</Text></TouchableOpacity>
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
        justifyContent: 'center',
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
        textAlign: 'center',
        width: 80
    }

})