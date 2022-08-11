import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';
import {Icon} from 'react-native-elements';
import Colors from '../constants/Colors';

const Appcontainer = ({...props}) => {
  return (
    <View style={styles.main}>
      <Icon
        type="material-community"
        name={props.name}
        color={Colors.white}
        size={20}
        style={{marginLeft: width(4)}}
      />
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        placeholderTextColor={Colors.white}
        style={{width: width(75), marginLeft: width(4), color: Colors.white}}
      />
    </View>
  );
};

export default Appcontainer;

const styles = StyleSheet.create({
  main: {
    height: height(7),
    backgroundColor: Colors.turquoise,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
