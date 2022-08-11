import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React, {useEffect} from 'react';
import SemesterCard from '../../components/SemesterCard';
import {height} from 'react-native-dimension';
import {Data1, Data,Data2} from '../../DummyData/DummyData';
const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'HOME SCREEN',
    });
  }, []);
  return (
    <ScrollView>
      {/* <View>
        <Button title="Logout" onPress={() => setUserId(null)} />
      </View> */}
      <View style={{marginTop: height(2)}}>
        <SemesterCard
          semester={'PDF BOOKS'}
          image={{
            uri: 'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          onPress={() => navigation.navigate('SemesterHome', {Data: Data})}
        />
        <SemesterCard
          semester={'PDF NOTES'}
          image={{
            uri: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZHklMjBub3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
          onPress={() => navigation.navigate('SemesterHome1', {Data1: Data1})}
        />
        <SemesterCard
          semester={'VIDEO LECTURES'}
          image={{
            uri: 'https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=',
          }}
          onPress={() => navigation.navigate('SemesterHome2', {Data1: Data2})} 
        /> 
      </View>
      {/* <View style={{marginBottom: height(2)}}></View> */}
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
