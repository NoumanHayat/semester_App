import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import images from '../../constants/images';
import Button1 from '../../components/Button1';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 300}} source={images.logo} />
      <View style={styles.button}>
        <Button1
          title={'Getting Started'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Magenta,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
});
