import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { width } from 'react-native-dimension';

const AppText = ({error, visible, style}) => {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={[styles.error, style]}>{error}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft:width(6)
  },
});
