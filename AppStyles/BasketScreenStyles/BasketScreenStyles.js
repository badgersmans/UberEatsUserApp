import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
        // justifyContent: 'center',
        marginHorizontal: 20
    },
    name: {
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: '8%'
    },   
    backButton: {
        fontSize: 30,
        color: 'black',
        marginBottom: 40
    },
    line: {
        borderWidth: 0.6,
        borderColor: 'lightgrey',
        marginBottom: 40
    },
    cartButton: {
        backgroundColor: 'black',
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6%',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    price: {
        color: 'white',
        fontSize: 20,
    },
});