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
    TextInput,
    Platform, Button, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS, ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import px2dp from '../../util/px2dp';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';

export default class MyCount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{marginLeft: 10}}>基本信息</Text>
                </View>
                <View>
                    <ScrollView>
                        <View style={styles.inputBox}>
                            <Text>姓名</Text>

                            <TextInput
                                onChangeText={this.onUsernameChanged}
                                style={styles.input}
                                placeholderTextColor={'#ABABAB'}//提示文本的颜色
                                placeholder={'输入手机号'}//提示文本内容
                            />
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
                            <Icon name={'md-phone-portrait'} color="#ccc" size={px2dp(25)} style={{marginRight:px2dp(5)}}/>

                            <TextInput
                                onChangeText={this.onUsernameChanged}
                                style={styles.input}
                                placeholderTextColor={'#ABABAB'}//提示文本的颜色
                                placeholder={'输入手机号'}//提示文本内容
                            />
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
                    </ScrollView>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: 30,
        backgroundColor: '#EBEBEB',
        justifyContent:'center',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    img: {
        width: 30,
        height: 30,
    },
    input: {
        width: '80%',
        height: 40,
        color: '#858585',
        paddingLeft: 8,
        fontSize: 12
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        borderRadius: 8,
        marginBottom: 5,
        marginLeft: 16,

    },
    btText: {
        color: '#fff',
    },
    actionBar: {
        height: theme.actionBar.height,
        backgroundColor: theme.actionBar.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    },
    list:{
        flex: 1,
        borderTopWidth: 2/PixelRatio.get(),
        borderTopColor: '#e4e4e4'
    },
    listItem: {
        flex: 1,
        height: px2dp(40),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(13),
        paddingRight: px2dp(25),
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 2/PixelRatio.get()
    },
});