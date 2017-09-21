/**
 *  Created by wjy 17-9-13
 */
import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    Platform, Button, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS, ScrollView
} from 'react-native';
import LoginScreen from './pages/LoginScreen';
import { StackNavigator } from 'react-navigation';
import px2dp from '../util/px2dp';
import theme from './config/theme';
import Avatar from './component/Avatar';
import TextButton from './component/TextButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from './component/ItemComponent';

const screenWidth = Dimensions.get('window').width;
export default class MyCenter extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    {Platform.OS === 'android' ?
                        <TouchableNativeFeedback>
                            <View style={styles.intro}>
                                <Avatar image={require('../images/photo.jpg')} size={px2dp(66)} textSize={px2dp(20)}/>
                                <View style={{marginLeft: px2dp(12)}}>
                                    <TextButton text="点击登录" color="#949494" fontSize={px2dp(14)} onPress={()=>{const { navigate } = this.props.navigation; navigate('LoginScreen');}}/>
                                </View>
                                <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-end'}} >
                                    <Icon name="ios-arrow-forward" color="#ccc" size={px2dp(30)} onPress={()=>{const { navigate } = this.props.navigation; navigate('PersonInfo');}}/>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableOpacity activeOpacity={theme.btnActiveOpacity}>
                            <View style={styles.intro}>
                                <Avatar image={require('../images/photo.jpg')} size={px2dp(66)} textSize={px2dp(20)}/>
                                <View style={{marginLeft: px2dp(12)}}>
                                    <Text style={{color: theme.text.color, fontSize: px2dp(20)}}>点击登录</Text>
                                    <TextButton text="添加职位 @添加公司" color="#949494" fontSize={px2dp(13)} />
                                </View>
                                <View style={{flex: 1, flexDirection:'row', justifyContent: 'flex-end'}}>
                                    <Icon name="ios-arrow-forward" color="#ccc" size={px2dp(30)}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    <View style={styles.list}>
                        <Item icon="md-heart" text="实名认证"  iconColor="#32cd32"
                              onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'您还没有实名认证~',operate: '去认证', go: 'AddPatient'});}}/>
                        <Item icon="md-pricetag" text="电子签名" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有电子签名哦~', operate: '创建电子签名'});}}/>
                        <Item icon="md-star-outline" text="HIS关联绑定" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有关联哦~', operate: '关联绑定'});}}/>
                        <Item icon="md-star-outline" text="统计报表" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有统计报表哦~', operate: '添加报表'});}}/>
                        <Item icon="md-ribbon" text="我的礼物" iconColor="#ff4500" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有礼物哦~'});}}/>
                        <Item icon="md-settings" text="设置"  onPress={()=> {const { navigate } = this.props.navigation; navigate('Config');}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    _alert(){
        if(Platform.OS === 'android') {
            Alert.alert(
                'Message',
                "This function currently isn't available",
                [{text: 'OK', onPress: () => {}}]
            );
        }else if(Platform.OS === 'ios'){
            AlertIOS.alert(
                'Message',
                "This function currently isn't available",
                [{text: 'OK', onPress: () => {}}]
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    actionBar: {
        height: theme.actionBar.height,
        backgroundColor: theme.actionBar.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    },
    intro: {
        height: px2dp(100),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: px2dp(20),
        borderTopWidth: 1/PixelRatio.get(),
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(10)
    },
    headerpic: {
        width: screenWidth,
        height: 120
    },
    centerhead: {
        width: screenWidth,
        height: 'auto',
        backgroundColor: '#FFB5C5'
    },
    list:{
        flex: 1,
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(12)
    },
    textview: {
        flex: 1,
        alignSelf: 'center',
    },
    texttitle: {
        width: screenWidth,
        backgroundColor: '#FFB5C5',
        height: 50,
        justifyContent: 'center',
    },
    textstyle: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
    loginarea: {
        flexDirection:'column',
        alignItems: 'center'

    },
    logintext: {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 2,
        borderRadius: 5
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 10
    }
});
