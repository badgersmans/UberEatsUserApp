import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    image: {
        width: '40%',
        aspectRatio: 1,
    },
    menuContainer: {
        marginBottom: 20,
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginHorizontal: 20
    },
    menuName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    menuDesc: {
        marginVertical: 10,
        fontSize: 17,
        color: 'grey'
    },
    menuPrice: {
        fontWeight: 'bold',
        fontSize: 18
    },
});