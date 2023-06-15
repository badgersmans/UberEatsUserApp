import { View, StyleSheet } from 'react-native'
import RestaurantCard from '../src/components/RestaurantCard'
import restaurants from '../assets/data/restaurants.json';
import { FlashList } from "@shopify/flash-list";
import { Link } from 'expo-router';

const HomeScreen = () => {
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  return (
    <View style={styles.root}>
        <FlashList
        data={restaurants}
        renderItem={({ item }) => (
            <Link
                href={{pathname: `/restaurant/${item.id}`, params: {item: item}}}
            >
                <RestaurantCard restaurant={item} />
            </Link>
        )
        }
        estimatedItemSize={20}
        showsVerticalScrollIndicator={false}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // backgroundColor: 'red',
        // alignItems: 'center'
    },
    cardContainer: {
        backgroundColor: 'pink',
        // marginTop: 0,
        // marginBottom: 20,
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


export default HomeScreen