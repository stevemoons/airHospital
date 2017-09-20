/**
 *  Created by wjy 17-9-13
 */
import React, { Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ToastAndroid,
    Dimensions,
    Button,
    Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScene from '../HomeScene';
import VerifyCode from 'react-native-verify-code';
import px2dp from '../../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';


const screenWidth = Dimensions.get('window').width;

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props)
    }

    phonenumber = '';
    disabled = false;

    onUsernameChanged = (newUsername) => {
        this.phonenumber = newUsername;
    };

    beforeCountdown = ()=>{
        //需要返回boolean值，true：开始倒计时，false：不开始倒计时，这里可以做一些验证，比如手机号的验证
        return true;
    }

    startCountdown = ()=>{

    }

    onValueChange = (text)=>{

    }


    next = () => {
        if (this.phonenumber.length != 0) {
            this.disabled = true;
            if(!(/^1[34578]\d{9}$/.test(this.phonenumber))) {
                ToastAndroid.show('手机号码有误',ToastAndroid.SHORT);
            }
        } else {
            ToastAndroid.show('手机号不能为空',ToastAndroid.SHORT);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <Icon name={'md-phone-portrait'} color="#ccc" size={px2dp(25)} style={{marginRight:px2dp(5)}}/>
                    <TextInput
                        onChangeText={this.onUsernameChanged}
                        style={styles.input}
                        placeholderTextColor={'#ABABAB'}//提示文本的颜色
                        placeholder={'11位中国大陆手机号'}//提示文本内容
                    />
                </View>
                <View>
                    <VerifyCode
                        placeholder='填写短信验证码'
                        placeholderTextColor='gray'
                        countdownNormalStyle={styles.countdownNormalStyle}
                        countdownStartStyle={styles.countdownStartStyle}
                        countdownEndStyle={styles.countdownEndStyle}
                        countdownNormalTextStyle={styles.countdownNormalTextStyle}
                        countdownStartTextStyle={styles.countdownStartTextStyle}
                        countdownEndTextStyle={styles.countdownEndTextStyle}
                        placeholderTextColor={'#ABABAB'}
                        maxTime={30}
                        normalTxt='发送验证码'
                        countdownTxt='秒后重发'
                        endTxt='再发一次哦'
                        auto={false}
                        beforeCountdown={this.beforeCountdown}
                        startCountdown={this.startCountdown}
                        onValueChange={this.onValueChange}/>
                </View>
                <View style={styles.inputBox}>
                    <Icon name={'md-lock'} color="#ccc" size={px2dp(25)} style={{marginRight:px2dp(5)}}/>
                    <TextInput
                        onChangeText={this.onPasswordChanged}
                        placeholderTextColor={'#ABABAB'}
                        placeholder={'设置密码, 6-20位字母或数字'}
                        secureTextEntry={true}//密码输入框
                        style={styles.input}/>
                </View>
                <TouchableOpacity
                    onPress={this.next}
                    style={styles.button}>
                    <Text style={styles.btText}>注册</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 30
    },
    img: {
        width: 30,
        height: 30,
    },
    input: {
        width: 250,
        height: 40,
        color: '#858585',
        paddingLeft: 5,
        fontSize: 12
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 50,
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 10
    },
    button: {
        height: 40,
        width: '66%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#66f',
        marginTop: 10,
    },
    btText: {
        color: '#fff'
    },
    countdownNormalStyle:{
        backgroundColor:'#76EEC6',
    },
    countdownStartStyle:{
        backgroundColor:'#EEE685',
    },
    countdownEndStyle:{
        backgroundColor:'#DDA0DD',
    },
    countdownNormalTextStyle:{
        color:'black',
    },
    countdownStartTextStyle:{
        color:'blue',
    },
    countdownEndTextStyle:{
        color:'gray',
    },
});
