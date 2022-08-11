import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import SemesterCard from '../../components/SemesterCard';
import {height} from 'react-native-dimension';

const SemesterHomeScreen = ({navigation, route}) => {
  const {Data} = route.params;
  console.log('dataaaaaaaaaaaa', Data);
  useEffect(() => {
    navigation.setOptions({
      title: 'SEMESTER LIST OF BOOKS',
    });
  }, []);
  return (
    // <ImageBackground
    //   style={{width: '100%', height: '100%'}}
    //   source={{
    //     uri: 'https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    //   }}>
    <View style={{marginTop: height(2)}}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <View>
            <SemesterCard
              semester={item.title}
              image={item.image}
              onPress={() =>
                navigation.navigate('Bookhome', {
                  Books: item.Books,
                  // booktitle: item.booktitle,
                })
              }
            />
          </View>
        )}
      />
      {/* </ImageBackground> */}
    </View>
  );
};

export default SemesterHomeScreen;

const styles = StyleSheet.create({});
