import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Stack, useNavigation, useRouter, useSearchParams } from "expo-router";
import { Image } from 'expo-image'
import restaurants from '../../assets/data/restaurants.json';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import DishListItem from '../components/DishListItem';
import { FlashList } from '@shopify/flash-list';


const RestaurantDetails = () => {
    const restaurant = restaurants[0];
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const router = useRouter();
    const navigation = useNavigation();

    const {id} = useSearchParams();
    console.log(`restaurant id: ${id}`)

    const ListHeader = () => {
        return (
            <>
                <View style={{position: 'relative'}}>
                    <Image
                        style={styles.image}
                        source={restaurant.image}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={300}
                    />
                </View>
                <View style={styles.imageOverlay}/>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={styles.title}>{restaurant.name}</Text>

                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>
                            $ • {restaurant.rating.toFixed(1)}
                        </Text>
                        <FontAwesome name="star" style={styles.starIcon} />
                    </View>
                </View>

                <View 
                    style={{
                        borderTopWidth: 1,
                        borderColor: 'lightgrey',
                        marginVertical: 20
                    }}
                />
                <Text style={styles.menuText}>Menu</Text>
            </>
        )
    }

  return (
    <View style={{flex: 1}}>
        <StatusBar style='light' />
        <Stack.Screen 
            options={{
                headerShown: false
            }}
        />
        <FlashList 
            data={restaurant.dishes}
            renderItem={({item}) => (
                <Pressable
                    onPress={
                        () => router.push({ pathname: `/restaurant/menu/${item.name}`, params: { id: item.id } })
                    }
                >
                    <DishListItem dish={item} />
                </Pressable>
                
                
            )}
            ListHeaderComponent={ListHeader}
            
            showsVerticalScrollIndicator={false}
            estimatedItemSize={20}
            ItemSeparatorComponent={() => (
                <View style={{ borderTopWidth: 1, borderColor: 'lightgrey', marginBottom: 20, marginHorizontal: 20 }}/>
            )}
        />

        <Pressable style={({ pressed }) => [
            styles.arrowBackground,
            { opacity: pressed ? 0.88 : 1 },
            ]}
            onPress={() => router.back()}
        >
            <Ionicons name="ios-arrow-back" style={styles.backArrow} />
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    arrowBackground: {
        position: 'absolute',
        top: '8%',
        left: '8%',
        backgroundColor: '#F5F5F5',
        borderRadius: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    backArrow: {
        fontSize: 30,
        color: 'grey'
    },
    title: {
        marginTop: '6%',
        marginBottom: '3%',
        fontSize: 35,
        fontWeight: '600'
    },
    ratingContainer: {
        flexDirection: 'row',
        // gap: 8,
        // backgroundColor: 'green',
        alignItems: 'center',
    },
    rating: {
        marginRight: '1%',
        fontSize: 18
    },
    starIcon: {
        fontSize: 20,
        color: "#F5CE48",
        // marginLeft: '-0.6%'
    },
    menuText: {
        marginHorizontal: 20,
        fontSize: 21,
        color: 'grey',
        marginBottom: 20 
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        aspectRatio: 16 / 9,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
})

export default RestaurantDetails