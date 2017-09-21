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
    render() {
        return (
            <View style={styles.container}>
                <MySwiper/>
                <ScrollView>
                    <View style={styles.list}>
                        <Item icon="md-heart" text="科室设置"  iconColor="#32cd32"
                              onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'您还没有实名认证~',operate: '去认证', go: 'AddPatient'});}}/>
                        <Item icon="md-pricetag" text="排班设置" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有电子签名哦~', operate: '创建电子签名'});}}/>
                        <Item icon="md-star-outline" text="请假申请" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有关联哦~', operate: '关联绑定'});}}/>
                        <Item icon="md-star-outline" text="看诊记录" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有统计报表哦~', operate: '添加报表'});}}/>
                        <Item icon="md-ribbon" text="在线看诊" iconColor="#ff4500" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有礼物哦~'});}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor,
    },
    headerpic: {
        width: screenWidth,
        height: 120
    },
    texttitle: {
        width: screenWidth,
        backgroundColor: '#FFEC8B',
        height: 50,
        justifyContent: 'center',
    },
    list:{
        flex: 1,
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(8)
    },
    textstyle: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',

    },
});
