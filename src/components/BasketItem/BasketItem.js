import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles'

const BasketItem = ({ dish, margin }) => {
  return (
    <View style={[styles.itemContainer, margin ? styles.margin : null]}>
        <Text style={styles.itemQuantity}>1</Text>
        <Text style={styles.itemName}>{dish.name}</Text>
        <Text style={styles.itemPrice}>{dish.price}</Text>
    </View>
  )
};


BasketItem.defaultProps = {
  margin: false,
};

export default BasketItem