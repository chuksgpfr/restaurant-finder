import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({searchTerm, changeSearchTerm,submitSearchTerm}) => {
    return (
        <View style={styles.box}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
            placeholder="Search" 
            style={styles.inputStyle} 
            autoCompleteType='off'
            autoCapitalize='none'
            value={searchTerm}
            onChangeText={newSearchTerm => changeSearchTerm(newSearchTerm)} 
            onSubmitEditing={()=>submitSearchTerm}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    box:{
        // width:50,
        height:50,
        backgroundColor:'#F0EEEE',
        borderRadius:5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginTop:10
    },
    inputStyle:{
        flex:1,
        fontSize:19
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:10
    }
})
