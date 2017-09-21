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
import Item from './component/ItemComponent';
import px2dp from '../util/px2dp';
import theme from './config/theme';
import MySwiper from './component/Swiper';

const screenWidth = Dimensions.get('window').width;

export default class HomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <MySwiper/>
                <ScrollView>
                    <View style={styles.list}>
                        <Item icon="md-heart" text="领域设置"  iconColor="#32cd32"
                              onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'您还没有实名认证~',operate: '去认证', go: 'AddPatient'});}}/>
                        <Item icon="md-pricetag" text="擅长设置" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有电子签名哦~', operate: '创建电子签名'});}}/>
                        <Item icon="md-star-outline" text="消息管理" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有关联哦~', operate: '关联绑定'});}}/>
                        <Item icon="md-ribbon" text="咨询回复" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有统计报表哦~', operate: '添加报表'});}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    list:{
        flex: 1,
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(8)
    },
    img: {
        width: screenWidth,
        height: 140,
    }
});
