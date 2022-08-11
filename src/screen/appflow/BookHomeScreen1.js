import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import BookCard from '../../components/BookCard';
import {height} from 'react-native-dimension';
// import * as openAnything from 'react-native-openanything';
const BookHomeScreen1 = ({route, params, navigation}) => {
  // const [url, setUrl] = useState();
  const {Books, booktitle} = route.params;
  // setUrl(Books);
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
            <BookCard
              semester={item.booktitle}
              CreditHours={item.creditHours}
              CourseCode={item.courseCode}
              image={item.image}
              ViewBook={() => navigation.navigate('PDF', {url: item.url})}
              // DownloadBook={() =>
              //   openAnything.Pdf(
              //     'https://educations4u.com/wp-content/uploads/2021/09/Introduction-to-STATISTICAL-THEORY-BSc-Part-1-By-Prof-Sher-Muhammad-Choudhry-and-Prof.-Dr.-Shahid-Kamal.pdf',
              //   )
              // }
            />
          </View>
        )}
      />
    </View>
  );
};
//  onPress={() => navigation.navigate('PDF', {url: item.url})}
// onPress={() =>
//   openAnything.Pdf(
//     'https://educations4u.com/wp-content/uploads/2021/09/Introduction-to-STATISTICAL-THEORY-BSc-Part-1-By-Prof-Sher-Muhammad-Choudhry-and-Prof.-Dr.-Shahid-Kamal.pdf',
//   )
// }
export default BookHomeScreen1;

const styles = StyleSheet.create({});
