import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';
import Colors from '../constants/Colors';
import {Image} from 'react-native-elements';

const SemesterCard = ({semester, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View style={styles.imageStyle}>
        <Image
          source={image}
          style={{width: '100%', height: '100%'}}
          PlaceholderContent={<ActivityIndicator color={'yellow'} size={100} />}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{semester}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SemesterCard;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: width(4),
    // backgroundColor: 'white',
    marginBottom: height(2),
  },
  imageStyle: {
    height: height(40),
    backgroundColor: 'red',
    elevation: 7,
    //   borderRadius: 20,
    overflow: 'hidden',
    borderTopEndRadius: height(3),
    borderTopLeftRadius: height(3),
  },
  titleContainer: {
    height: height(10),
    backgroundColor: Colors.Magenta,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderBottomEndRadius: height(3),
    borderBottomLeftRadius: height(3),
    //   borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
});
