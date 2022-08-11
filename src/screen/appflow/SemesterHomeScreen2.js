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
    useEffect(() => {
      navigation.setOptions({
        title: 'SEMESTER LIST OF LECTURE',
      });
    }, []);
    return (

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
                  })
                }
              />
            </View>
          )}
        />
      </View>
    );
  };
  
  export default SemesterHomeScreen1;
  
  const styles = StyleSheet.create({});
  