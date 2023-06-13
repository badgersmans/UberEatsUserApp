import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack , useRouter, useSearchParams} from "expo-router";
import restaurants from '../../../assets/data/restaurants.json'
import styles from '../../../AppStyles/BasketScreenStyles/BasketScreenStyles'
import { FlashList } from '@shopify/flash-list';


const restaurant = restaurants[0];

const BasketItem = ({ dish, index }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemQuantity}>1</Text>
            <Text style={styles.itemName}>{dish.name}</Text>
            <Text style={styles.itemPrice}>{dish.price}</Text>
        </View>
    )
}


const Basket = () => {
  const data = useSearchParams();
  // console.log(data.item)
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
    <Stack.Screen 
      options={{
          headerShown: false
      }}
    />

      {/* <Ionicons name="arrow-back" style={styles.backButton} onPress={() => router.back()}/> */}
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={{fontSize: 22, fontWeight: '600', marginBottom: '5%'}}>Your items</Text>

      <FlashList 
        data={restaurant.dishes}
        renderItem={({item}) => <BasketItem dish={item} />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={10}
        ListFooterComponent={() => (
            <View style={styles.line}/>
        )}
      />


      <Pressable style={({ pressed }) => [
        styles.cartButton,
        { opacity: pressed ? 0.8 : 1 },
        ]}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Place order</Text>
      </Pressable>
      
    </SafeAreaView>
  )
}

export default Basket