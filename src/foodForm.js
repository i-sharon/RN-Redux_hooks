import React, { useState} from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

const FoodForm =({navigation})=>{

  const [food, setFood] = useState('')
  const dispatch = useDispatch();
  const submitFood = (food) => dispatch(addFood(food))

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Shopping List</Text>
      <TextInput
        value={food}
        placeholder='Enter Item'
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
        submitFood(food)
        setFood('')
        }}>
        <Text style={{ fontSize: 22, color: 'black' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => navigation.navigate('FoodList')}>
        <Text style={{ fontSize: 22, color: 'black' }}>Go to Shopping List</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'black'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});


export default FoodForm;