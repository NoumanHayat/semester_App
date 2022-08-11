import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import BookCard from '../../components/BookCard';
import {height} from 'react-native-dimension';
const BookHomeScreen1 = ({route, params, navigation}) => {
  const {Books, booktitle} = route.params;
  console.log('aaaaaaaaaaa', Books);
  useEffect(() => {
    navigation.setOptions({
      title: 'NOTES LIST',
    });
  }, []);
  return (
    <View style={{marginTop: height(2)}}>
      <FlatList
        data={Books}
        renderItem={({item}) => (
          <View>
            {/* <BookCard
              semester={item.booktitle}
              CreditHours={item.creditHours}
              CourseCode={item.courseCode}
              image={item.image}
              ViewBook={() => navigation.navigate('PDF', {url: item.url})}
            
            /> */}
            <Text>{item.url}</Text> 
          </View>
        )}
      />
    </View>
  );
};

export default BookHomeScreen1;
 
const styles = StyleSheet.create({});
