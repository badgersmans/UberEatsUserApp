import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        // alignItems: 'center'
    },
    cardContainer: {
        // backgroundColor: 'pink',
        // margin: 10,
        // marginTop: 0,
        // marginBottom: 20,
        // width: '100%',
        // flex: 1,
        padding: 10,
        paddingBottom: 20,
        paddingTop: 0
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9
    },
    name: {
        fontWeight: '600',
        fontSize: 19,
        letterSpacing: 0.25,
    },
    ratingContainer: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: '15%',
        paddingVertical: 5,
        paddingHorizontal: 3,
        backgroundColor: '#E4E4E4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rating: {
        fontWeight: 'bold',
    },
    deliveryInfo: {
        color: 'grey',
        fontSize: 17,
        marginTop: '-2.8%'
    },

});