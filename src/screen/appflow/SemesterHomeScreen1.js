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

const SemesterHomeScreen1 = ({navigation, route}) => {
  const {Data1} = route.params;
  console.log('dataaaaaaaaaaaa', Data1);
  useEffect(() => {
    navigation.setOptions({
      title: 'SEMESTER LIST OF NOTES',
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
        data={Data1}
        renderItem={({item}) => (
          <View>
            <SemesterCard
              semester={item.title}
              image={item.image}
              onPress={() =>
                navigation.navigate('Bookhome1', {
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

export default SemesterHomeScreen1;

const styles = StyleSheet.create({});
