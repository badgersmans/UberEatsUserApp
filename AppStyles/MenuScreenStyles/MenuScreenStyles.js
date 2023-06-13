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
        fontSize: 35
    },
    desc: {
        color: 'grey',
        fontSize: 16,
        letterSpacing: 0.5,
        marginVertical: 30
    },
    qtyContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
    },
    quantity: {
        fontSize: 30,
        // fontWeight: 'bold'
    },
    qtyButtons: {
        fontSize: 50,
        color: 'black'
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6%',
        // borderRadius: '50%'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        marginLeft: '13%',
        // backgroundColor: 'red',
    },
    price: {
        color: 'white',
        fontSize: 20,
    },
});