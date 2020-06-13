import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import yelp from '../api/yelp';
import { useRoute } from '@react-navigation/native';

const ShowRestaurant = () => {
    const [detail, setDetail] = useState({})
    const route = useRoute();
    let {id} = route.params.params;

    const getRestaurant= async (id)=>{
        const response = await yelp.get(`/${id}`);
        setDetail(response.data)
    }

    useEffect(()=>{
        getRestaurant(id)
    },[])
    return (
        <View>
            <Text>{detail.name}</Text>
            <FlatList
            data={detail.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}} />
            }}
             />
        </View>
    )
} 

export default ShowRestaurant

const styles = StyleSheet.create({
    image:{
        width:250,
        height:120,
        borderRadius:5,
    }
})
