import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Image } from 'expo-image'

const RestaurantCard = ({restaurant}) => {
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={styles.cardContainer}>
        <Image
            style={styles.image}
            source={restaurant.image}
            placeholder={blurhash}
            contentFit="cover"
            transition={300}
        />

        <View 
            style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                marginVertical: 10,
                // backgroundColor: 'red'
            }}
        >
            <Text style={styles.name}>{restaurant.name}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{restaurant.rating.toFixed(1)}</Text>
            </View>
        </View>

        <Text style={styles.deliveryInfo}>
            {restaurant.rating.toFixed(1)} • {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min
        </Text>
    </View>
  )
};

export default RestaurantCard