import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import React from 'react';
import { height, width } from 'react-native-dimension';
import { Dimensions } from "react-native";

import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

import { Image } from 'react-native-elements';
const BookCard = ({
    semester,
    url,
    CreditHours,
    CourseCode,
}) => {
    return (
        <View style={styles.main}>
            <View style={styles.imageStyle}>
                <YoutubePlayer
                    height={SCREEN_WIDTH}
                    play={false}
                    videoId={url}
                />
            </View>
            <View style={styles.titleContainer}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text style={styles.title}>{semester}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginHorizontal: width(4),
                    }}>
                    <Text style={styles.creditHours}>Credit Hours {CreditHours}</Text>
                    <Text style={styles.creditHours}>Course Code {CourseCode}</Text>
                </View>
            </View>           
        </View>
    );
};

export default BookCard;

const styles = StyleSheet.create({
    main: {
        marginHorizontal: width(4),
        marginBottom: height(2),
    },
    imageStyle: {
        height: 200,
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
        justifyContent: 'space-around',
        // alignItems: 'center',
        // justifyContent: 'center',
        // elevation: 5,
        // borderBottomEndRadius: height(3),
        // borderBottomLeftRadius: height(3),
        //   borderRadius: 10,
    },
    titleContainer1: {
        height: height(10),
        backgroundColor: Colors.Magenta,
        flexDirection: 'row',
        borderBottomEndRadius: height(3),
        borderBottomLeftRadius: height(3),
        alignItems: 'center',
        justifyContent: 'center',

        //   borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    creditHours: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
    },
});
