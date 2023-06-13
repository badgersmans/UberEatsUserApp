import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack , useSearchParams} from "expo-router";
import restaurants from '../../../assets/data/restaurants.json'
import styles from '../../../AppStyles/MenuScreenStyles/MenuScreenStyles'
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';

const MenuItem = () => {
  const data = useSearchParams();
  // console.log(data.item)
  const dish = restaurants[0].dishes[0];
  const [quantity, setQuantity] = useState(0);

  const onMinus = () => {
    if(quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const onPlus = () => {
    setQuantity(quantity + 1)
  };

  const getTotal = () => {
    return (quantity * dish.price).toFixed(2)
  }


  return (
    <SafeAreaView style={styles.container}>
    <Stack.Screen 
      options={{
          headerShown: false
      }}
    />

      <Ionicons name="arrow-back" style={styles.backButton} />

      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.desc}>{dish.description}</Text>

      <View style={styles.line}/>

      <View style={styles.qtyContainer}>
        <SimpleLineIcons name="minus" style={styles.qtyButtons} onPress={() => onMinus()}/>
        <Text style={styles.quantity}>{quantity}</Text>
        <SimpleLineIcons name="plus" style={styles.qtyButtons} onPress={() => onPlus()}/>
      </View>

      <Pressable style={({ pressed }) => [
        styles.cartButton,
        { opacity: pressed ? 0.8 : 1 },
        ]}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>{`Add ${quantity} to basket`}</Text>
        <Text style={styles.price}>RM {getTotal()}</Text>
      </Pressable>
      
    </SafeAreaView>
  )
}

export default MenuItem