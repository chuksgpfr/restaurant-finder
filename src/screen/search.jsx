import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/search-bar'
import useResult from '../hooks/useResult';
import RestaurantList from '../components/RestaurantList';


const SearchScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [handleSearch, result] = useResult();

    const filterRestaurantByPrice = (price) =>{
        return result.filter(result=>{
            return result.price === price;
        })
    }

    return (
        <View>
            <SearchBar 
            searchTerm={searchTerm} 
            changeSearchTerm={newSearchTerm=>setSearchTerm(newSearchTerm)} 
            submitSearchTerm={handleSearch(searchTerm)}
            />
            <Text>{searchTerm}</Text>
            <Text>We found {result.length} businesses </Text>
            <RestaurantList
            // navigation={navigation} 
            title={'Cheap Restaurants'}
            restaurants = {filterRestaurantByPrice('$')} 
            />
            <RestaurantList 
            title={'Pricy Restaurants'}
            restaurants = {filterRestaurantByPrice('$$')} 
            />
            <RestaurantList 
            title={'Expensive Restaurants'}
            restaurants = {filterRestaurantByPrice('$$$')} 
            />
        </View>
    )

}

export default SearchScreen

const styles = StyleSheet.create({})
