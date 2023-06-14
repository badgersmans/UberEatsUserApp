import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { Image } from 'expo-image'
import orders from '../../assets/data/orders.json'
import restaurants from '../../assets/data/restaurants.json'
import styles from '../../AppStyles/OrderDetailsScreenStyles/OrderDetailsScreenStyles'
import BasketItem from '../../src/components/BasketItem'
import { FlashList } from '@shopify/flash-list'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const order = orders[0]

const ListHeader = () => {
  return (
    <>
      <Image
        style={styles.image}
        source={order.Restaurant.image}
        placeholder={blurhash}
        contentFit='contain'
        transition={300}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>tgi fridays</Text>
        <Text style={styles.timestamp}>{order.status} • {order.createdAt}</Text>
        <Text style={styles.yourOrders}>Your order</Text>
      </View>
    </>
  )
}

const OrderDetails = () => {
  const restaurant = restaurants[0]
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {marginBottom: insets.bottom}]}>
    <Stack.Screen 
        options={{
            title: 'Order'
        }}
    />

      <FlashList 
        data={restaurant.dishes}
        renderItem={({item}) => <BasketItem dish={item} margin />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={10}
        ListHeaderComponent={<ListHeader />}
        ItemSeparatorComponent={() => (
          <View style={styles.line}/>
        )}
        ListFooterComponent={() => (
          <View style={styles.line}/>
        )}
      />

    </View>
  )
}

export default OrderDetails