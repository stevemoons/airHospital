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
import Icon from 'react-native-vector-icons/Ionicons';

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
                    <View style={styles.list}>
                        <TouchableOpacity>
                            <View style={styles.listItemFirst}>
                                <Text style={{color: 'black', fontSize: px2dp(13), marginLeft: px2dp(20)}}>头像</Text>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <Image source={require('../../images/photo.jpg')} style={styles.headPic}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Item icon="md-pricetag" text="名字" subText="ios-arrow-forward" dataText="汪汪汪"/>
                        <Item icon="md-star-outline" text="账号" subText="ios-arrow-forward" dataText="suoweijiankang"/>
                        <Item icon="md-menu" text="我的地址" subText="ios-arrow-forward" dataText="绿地中心"/>
                        <Item icon="md-menu" text="更多" subText="ios-arrow-forward"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class Item extends Component{
    static propTypes = {
        icon: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        text: PropTypes.string.isRequired,
        subText: PropTypes.string,
        dataText: PropTypes.string,
        onPress: PropTypes.func
    }

    static defaultProps = {
        iconColor: 'gray'
    }

    render(){
        const {icon, iconColor, text, subText, onPress, dataText} = this.props;

        if(Platform.OS === 'android'){
            return(
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.listItem}>
                        <Text style={{color: 'black', fontSize: px2dp(13), marginLeft: px2dp(20)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{marginRight: 10, fontSize: 13}}>{dataText}</Text>
                            <Icon name={subText} size={px2dp(15)} style={{color: "#ccc"}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                    <View style={styles.listItem}>
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
    listItem: {
        flex: 1,
        height: px2dp(46),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: px2dp(20),
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 2/PixelRatio.get()
    },
    listItemFirst: {
        flex: 1,
        height: px2dp(80),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: px2dp(20),
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 2/PixelRatio.get()
    },
    headPic: {
        width: px2dp(65),
        height: px2dp(65),
        borderRadius:50
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
