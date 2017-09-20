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
                        <Item icon="md-heart" text="常用就诊人"  iconColor="#32cd32"
                              onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有常用就诊人哦~',operate: '添加常用就诊人', go: 'AddPatient'});}}/>
                        <Item icon="md-pricetag" text="我的账户" onPress={()=> {const { navigate } = this.props.navigation; navigate('MyCount');}}/>
                        <Item icon="md-star-outline" text="我的就诊" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有就诊记录哦~', operate: '添加就诊'});}}/>
                        <Item icon="md-star-outline" text="我的检查" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有检查记录哦~', operate: '添加就诊'});}}/>
                        <Item icon="md-menu" text="我的预约" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有预约记录哦~',operate: '添加预约'});}} />
                        <Item icon="md-calendar" text="我的申请" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有申请记录哦~',operate: '申请'});}}/>
                        <Item icon="md-volume-up" text="我的咨询" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有咨询记录哦~',operate: '发起咨询'});}}/>
                    </View>
                    <View style={styles.list}>
                        <Item icon="md-ribbon" text="我的订单" iconColor="#ff4500" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有订单记录哦~',operate: '创建订单'});}}/>
                        <Item icon="md-ribbon" text="我的关注" iconColor="#ff4500" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有关注记录哦~',operate: '添加关注'});}}/>
                        <Item icon="md-ribbon" text="我的消息" iconColor="#ff4500" onPress={()=> {const { navigate } = this.props.navigation; navigate('DataEmpty',{text:'暂时没有消息哦~',operate: '添加关注'});}}/>
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
        paddingLeft: px2dp(25),
        paddingRight: px2dp(25),
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 2/PixelRatio.get()
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
