import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import RestaurantDetail from './RestaurantDetail'
import { useNavigation } from '@react-navigation/native';
//import { withNavigation } from '@react-navigation/compat';


const RestaurantList = ({title, restaurants}) => {
    //console.log(this.props)
    const navigation = useNavigation();
    if (!restaurants.length) {
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={restaurants=>restaurants.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ShowRestaurant',{screen:'ShowRestaurant',params:{id:item.id}})}
                    >
                        <RestaurantDetail  restaurant={item} />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

export default RestaurantList

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }
})
