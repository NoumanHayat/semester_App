import {loadOptions} from '@babel/core';
import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import Pdf from 'react-native-pdf';
import * as Progress from 'react-native-progress';
const Show = ({route, params}) => {
  const [progress, setprogress] = useState();
  const {url} = route.params;
  console.log('aaaaaaaa', url);
  const source = {
    // uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    uri: url,
    cache: true,
  };

  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf' };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadProgress={percent => {
          console.log(percent);
          setprogress(percent);
          return (
            <Progress.Bar
              progress={percent}
              color={'blue'}
              borderColor={'yellow'}
            />
          );
        }}
        enablePaging={true}
        renderActivityIndicator={() => {
          console.log(progress);
          return (
            <Progress.Bar
              progress={progress}
              color={'blue'}
              borderColor={'red'}
            />
          );
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          // console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          // console.log(`Current page: ${page}`);
        }}
        onError={error => {
          // console.log(error);
        }}
        onPressLink={uri => {
          // console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default Show;
