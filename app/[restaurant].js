import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useSearchParams } from "expo-router";
import { Image } from 'expo-image'

const RestaurantDetails = () => {
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const data = useSearchParams();
    console.log(data)
  return (
    <View>
        {/* <Stack.Screen 
            options={{
                headerShown: false
            }}
        /> */}

      
            {/* <Image
                style={styles.image}
                source={restaurant.image}
                placeholder={blurhash}
                contentFit="cover"
                transition={300}
            /> */}
            <Text>dfsdfdd</Text>
 
    </View>
  )
}

export default RestaurantDetails
