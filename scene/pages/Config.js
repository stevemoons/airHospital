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
import px2dp from '../../util/px2dp';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';
import Item from '../component/ItemComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;
export default class MyCenter extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    _onPressCallback() {
        const { navigate } = this.props.navigation;
        navigate('LoginScreen');
        alert(121313)
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.list}>
                        <Item icon="md-heart" text="账户重置" subText="ios-arrow-forward" iconColor="#32cd32"/>
                        <Item icon="md-pricetag" text="清除缓存" subText="ios-arrow-forward"/>
                        <Item icon="md-star-outline" text="修改资料" subText="ios-arrow-forward"/>
                        <Item icon="md-menu" text="关于我们" subText="ios-arrow-forward"/>
                    </View>
                    <View style={styles.btnBottom}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.btText}>退出</Text>
                        </TouchableOpacity>
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
    actionBar: {
        height: theme.actionBar.height,
        backgroundColor: theme.actionBar.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0,
    },

    list:{
        flex: 1,
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(12)
    },
    button: {
        height: 40,
        width: '62%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#66f'
    },
    btText: {
        color: '#fff',
    },
    btnBottom: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});
