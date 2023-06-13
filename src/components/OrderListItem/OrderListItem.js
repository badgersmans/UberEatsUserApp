import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Image } from 'expo-image'


const OrderListItem = ({ order }) => {
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={order.Restaurant.image}
            placeholder={blurhash}
            contentFit="cover"
            transition={300}
        />

        <View>
            <Text style={styles.name}>name</Text>
            <Text style={styles.items}>items • RM 23</Text>
            <Text style={styles.timestamp}>{order.createdAt} • {order.status}</Text>
        </View>
    </View>
  )
}

export default OrderListItem