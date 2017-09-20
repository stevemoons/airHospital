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
                <View style={styles.countHeader}>
                    <Text style={styles.count}>账户余额(元)</Text>
                    <Text style={styles.money}>6.66</Text>
                </View>
                <ScrollView>
                    <View style={styles.list}>
                        <Item icon="md-card" text="银行卡" subText="ios-arrow-forward" iconColor="#32cd32"/>
                        <Item icon="md-card" text="充值" subText="ios-arrow-forward" iconColor="#6495ED"/>
                        <Item icon="md-card" text="提现" subText="ios-arrow-forward" iconColor="#EEB422"/>
                        <Item icon="md-menu" text="明细" subText="ios-arrow-forward" onPress={()=> {const { navigate } = this.props.navigation; navigate('CountDetil');}}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

class Item extends Component{
    static propTypes = {
        icon: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        text: PropTypes.string.isRequired,
        subText: PropTypes.string,
        onPress: PropTypes.func
    }

    static defaultProps = {
        iconColor: 'gray'
    }

    render(){
        const {icon, iconColor, text, subText, onPress} = this.props;

        if(Platform.OS === 'android'){
            return(
                <TouchableOpacity onPress={onPress} >
                    <View style={styles.listItem}>
                        <Icon name={icon} size={px2dp(20)} color={iconColor}/>
                        <Text style={{color: 'black', fontSize: px2dp(12), marginLeft: px2dp(10)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Icon name={subText} size={px2dp(15)} style={{color: "#ccc"}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                    <View style={styles.listItem}>
                        <Icon name={icon} size={px2dp(22)} color={iconColor}/>
                        <Text style={{color: 'black', fontSize: px2dp(15), marginLeft: px2dp(20)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    countHeader: {
        width: '100%',
        height: 150,
        backgroundColor: '#5CACEE',
        paddingTop: 40,
        paddingLeft: 20
    },
    count: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 10
    },
    money: {
        color: '#fff',
        fontSize: 50
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