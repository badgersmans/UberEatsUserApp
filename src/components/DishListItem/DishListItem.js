import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Image } from 'expo-image'


const DishListItem = ({dish}) => {
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={styles.menuContainer}>
        <View style={{flex: 1}}>
            <Text style={styles.menuName}>{dish.name}</Text>
            <Text style={styles.menuDesc} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.menuPrice}>RM {dish.price}</Text>
        </View>

        {dish.image && (
            <Image
                style={styles.image}
                source={dish.image}
                placeholder={blurhash}
                contentFit="contain"
                transition={300}
            />
        )}
    </View>
  )
}

export default DishListItem