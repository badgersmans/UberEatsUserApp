import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../AppStyles/OrdersScreenStyles/OrdersScreenStyles'
import { Stack } from 'expo-router'
import OrderListItem from '../../src/components/OrderListItem/OrderListItem'
import orders from '../../assets/data/orders.json'
import { FlashList } from "@shopify/flash-list";

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Stack.Screen 
        options={{
            headerShown: false
        }}
    />
    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 28, marginVertical: '5%' }}>Your orders</Text>

    <FlashList
        data={orders}
        renderItem={({ item }) => (
            <OrderListItem order={item}/>
        )
        }
        estimatedItemSize={20}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.line} />}
        ListFooterComponent={() => <View style={styles.line} />}
    />

    </SafeAreaView>
  )
}

export default OrdersScreen