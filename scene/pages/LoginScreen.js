/**
 *  Created by wjy 17-9-13
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ToastAndroid,
    Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScene from '../HomeScene';
import TextDivider from '../component/TextDivider';
import px2dp from '../../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }

    username = '';
    password = '';

    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
    };

    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };

    login = () => {
        if (this.username == '1' && this.password == '1') {
            ToastAndroid.show('登录成功',ToastAndroid.SHORT);
            setTimeout(() => {
                const { navigate } = this.props.navigation;
                navigate('MyCenter');
            }, 2000)
        } else {
            ToastAndroid.show('登录失败',ToastAndroid.SHORT);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginTop: px2dp(40), marginBottom: px2dp(20)}}>
                    <Image style={{width:px2dp(45), height:px2dp(45)}} source={require('../../images/logo_og.png')}/>
                </View>
                <View style={styles.inputBox}>
                    <Icon name={'md-phone-portrait'} color="#ccc" size={px2dp(25)} style={{marginRight:px2dp(5)}}/>

                    <TextInput
                        onChangeText={this.onUsernameChanged}
                        style={styles.input}
                        placeholderTextColor={'#ABABAB'}//提示文本的颜色
                        placeholder={'输入手机号'}//提示文本内容
                    />
                </View>
                <View style={styles.inputBox}>
                    <Icon name={'md-lock'} color="#ccc" size={px2dp(25)} style={{marginRight:px2dp(5)}}/>
                    <TextInput
                        onChangeText={this.onPasswordChanged}
                        placeholderTextColor={'#ABABAB'}
                        placeholder={'输入密码'}
                        secureTextEntry={true}//密码输入框
                        style={styles.input}/>
                </View>
                <View style={{marginBottom: 30}}></View>
                <TouchableOpacity
                    onPress={this.login}
                    style={styles.button}>
                    <Text style={styles.btText}>登录</Text>
                </TouchableOpacity>
                <View style={styles.user}>
                    <Text style={{fontSize: 12}} onPress={() => {const {navigate} = this.props.navigation; navigate('RegisterScreen');}}>忘记密码</Text>
                    <Text style={{color:'#66CDAA', fontSize: 12}} onPress={() => {const {navigate} = this.props.navigation; navigate('RegisterScreen');}}>注册</Text>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'center', marginLeft: px2dp(20), marginRight: px2dp(20)}}>
                        <TextDivider text="其他账号登录"/>
                    </View>
                    <View style={styles.otherlogin}>
                        <Image source={require('../../images/weixin.png')} style={styles.logo}/>
                        <Image source={require('../../images/QQ.jpg')} style={styles.logo}/>
                        <Image source={require('../../images/weibo.png')} style={styles.logo}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    img: {
        width: 30,
        height: 30,
    },
    input: {
        width: '80%',
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
        marginBottom: 8
    },
    button: {
        height: 40,
        width: '62%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    btText: {
        color: '#fff',
    },
    user: {
        flex: 1,
        width: '61%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -150
    },
    otherlogin: {
        flex: 1,
        width: 300,
        marginTop: px2dp(10),
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent:'space-around',
        marginTop: -40
    },
    logo: {
        width: 45,
        height: 45,
        borderRadius: 100
    }
});
