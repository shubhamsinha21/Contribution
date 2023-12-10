import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import React, {
    useState
} from 'react'

export default function Login({
    navigation
}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({})


    const validateForm = () => {
        if (!email) {
            errors.email = 'Enter your email'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!password) {
            errors.password = 'Enter your password'
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters.';
        }

        setErrors(errors)
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if (validateForm()) {
            setEmail('')
            setPassword('')
            setErrors({})
            console.warn("You are Logged in 🎉")

        }
    }

    return ( <
            KeyboardAvoidingView behavior = 'padding'
            keyboardVerticalOffset = {
                100
            } >
            <
            View style = {
                styles.container
            } >
            <
            View style = {
                styles.form
            } >
            <
            Text style = {
                styles.header
            } > < Text style = {
                styles.head
            } > Login Here < /Text></Text >

            <
            TextInput placeholder = 'Your Email'
            onChangeText = {
                setEmail
            }
            value = {
                email
            }
            style = {
                styles.inputBox
            }
            /> {
                errors.email ? < Text style = {
                        styles.error
                    } > {
                        errors.email
                    } < /Text> : null}

                    <
                    TextInput
                placeholder = 'Your Password'
                onChangeText = {
                    setPassword
                }
                value = {
                    password
                }
                style = {
                    styles.inputBox
                }
                secureTextEntry = {
                    true
                }
                /> {
                    errors.password ? < Text style = {
                            styles.error
                        } > {
                            errors.password
                        } < /Text> : null}

                        <
                        TouchableOpacity onPress = {
                            handleSubmit
                        } >
                        <
                        Text style = {
                            styles.submit
                        } > Submit < /Text> <
                        /TouchableOpacity>

                        <
                        View style = {
                            styles.loginPage
                        } >
                        <
                        TouchableOpacity onPress = {
                            () => navigation.navigate('Signup')
                        } > < Text style = {
                            styles.login
                        } > Back to Signup < /Text></TouchableOpacity >
                        <
                        TouchableOpacity onPress = {
                            () => navigation.navigate('ResetPassword')
                        } > < Text style = {
                            styles.login
                        } > Forgot Passord < /Text></TouchableOpacity >
                        <
                        /View>

                        <
                        /View > <
                        /View> <
                        /KeyboardAvoidingView>
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
                }

            })