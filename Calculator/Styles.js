import { StyleSheet } from 'react-native'

export default Exstyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    displayText: {
        fontSize: 48,
        color: 'white',
    },
    buttonContainer: {
        flex: 3,
        width: '100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 5,
        margin: 1,
        padding: 15,
    },
    buttonText: {
        fontSize: 36,
        color: 'black',
    },
    zeroButton: {
        flex: 1,
        padding: 15
    },
    zeroButtonText: {
        fontSize: 36,
        color: 'black',
    },
    operatorButton: {
        backgroundColor: '#eb8744',
    },
    operatorButtonText: {
        color: 'black',
    },
    equalButton: {
        flex: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eb8744',
        elevation: 5,
    },
    equalButtonText: {
        color: 'black',
    },
    clearButtonText: {
        color: 'black',
    },
})