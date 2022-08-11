import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import VideoCard from '../../components/VideoCard';
import {height} from 'react-native-dimension';
import YoutubePlayer from 'react-native-youtube-iframe'
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
            {/* <YoutubePlayer
                height={300}
                play={true}
                videoId={'mLI_QxszYrU'}
            /> */}
            
            <VideoCard
              semester={item.booktitle}
              CreditHours={item.creditHours}
              CourseCode={item.courseCode}
              url={item.url} 
            />
          </View>
        )}
      />
    </View>
  );
};

export default BookHomeScreen1;
 
const styles = StyleSheet.create({});
