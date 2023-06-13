import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '3%',
    },
    image: {
        width: '28%',
        aspectRatio: 1,
        marginRight: '5%',
        // backgroundColor: 'red'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        // backgroundColor: 'red',
    },
    items: {
        marginVertical: '8%'
    },
    timestamp: {
        color: 'grey',
        fontSize: 13
    },
});