import React from 'react';
import { 
  StyleSheet,
  FlatList, View, TextInput, Text, TouchableOpacity, Image
   } from 'react-native'
import { useDispatch ,useSelector} from 'react-redux';
import { delFood } from './actions/food';
import { ListItem, Icon } from 'react-native-elements';


const FoodList=()=>{

  const dispatch = useDispatch();
  const deleteCurrent = (key) => dispatch(delFood(key))
  const foods = useSelector(state => state.foodReducer.foodList)
  return (
  
    <View>
    <FlatList style={styles.listContainer}
          data= {foods}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={(data) => {
          return(
                              <TouchableOpacity>
                               <View style={styles.row}>
                               <Text style ={styles.title}>{data.item.name}</Text>
                               <TouchableOpacity onPress ={()=> deleteCurrent(data.item.key)}>
                               <Icon name='delete' size={35} color="black" />
                               </TouchableOpacity>
                               </View>
                               </TouchableOpacity>
                          );

   }}
/>
</View>
);
} 

          const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'pink',
    padding: 16
  },
  listText: {
    fontSize: 30,
     
  },
  row:{
    flexDirection:'row',
    justifyContent :'space-between',
    paddingVertical:10,
    paddingHorizontal:10,
   // borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: 'white',
    backgroundColor:'peachpuff'
},
title:{

    marginTop:10,
    color: 'black',

    //fontWeight: 'bold',
     fontSize: 25,
},
  
});


export default FoodList;