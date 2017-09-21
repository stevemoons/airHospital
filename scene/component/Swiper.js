/**
 *  Created by wjy 17-9-13
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    Platform, Button, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS, ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';

const screenWidth = Dimensions.get('window').width;

export default class MySwiper extends Component {
    render() {
        return(
            <View style={{height: 140}}>
                <Swiper
                    height={140}
                    horizontal={true}
                    paginationStyle={{bottom: 10}}
                    showsButtons={true}
                    autoplay={true}>
                    <Image source= {require('../../images/doc.png')} style={styles.img}/>
                    <Image source= {require('../../images/consult.jpg')} style={styles.img}/>
                    <Image source= {require('../../images/service.jpg')} style={styles.img}/>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        width: screenWidth,
        height: 140
    }
});
