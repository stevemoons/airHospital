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
import Icon from 'react-native-vector-icons/Ionicons';
import px2dp from '../../util/px2dp';
import theme from '../config/theme';

const screenWidth = Dimensions.get('window').width;
export default class Item extends Component{
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
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.listItem}>
                        <Icon name={icon} size={px2dp(22)} color={iconColor}/>
                        <Text style={{color: 'black', fontSize: px2dp(13), marginLeft: px2dp(20)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Icon name={'ios-arrow-forward'} size={px2dp(15)} style={{color: "#ccc"}}/>
                        </View>
                    </View>
                </TouchableNativeFeedback>
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
    listItem: {
        flex: 1,
        height: px2dp(46),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(25),
        paddingRight: px2dp(25),
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 2/PixelRatio.get()
    }
});
