import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingBottom: 25 ,
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    itemQuantity: {
        borderWidth: 1,
        borderColor: 'transparent',
        padding: '1%',
        paddingHorizontal: '2%',
        backgroundColor: 'lightgrey',
        marginRight: '3%',
        fontSize: 20,
    },
    itemName: {
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.25
    },
    itemPrice: {
        marginLeft: 'auto',
        fontSize: 20,
        fontWeight: '300'
    },
    margin: {
        marginHorizontal: 20
    }
});