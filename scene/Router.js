/**
 *  Created by wjy 17-9-13
 */
import {
    Image,
    StyleSheet,
    Text,
    AsyncStorage
} from 'react-native';
import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import HomeScene from './HomeScene';
import MainScreen from './MainScreen';
import MyCenter from './MyCenter';
import MyService from './MyService';
import MyConsult from './MyConsult';
import LoginScreen from './pages/LoginScreen';
import Config from './pages/Config';
import RegisterScreen from './pages/RegisterScreen';
import PersonInfo from './pages/PersonInfo';
import MyCount from './pages/MyCount';
import CountDetil from './pages/CountDetil';
import AddPatient from './pages/AddPatient';
import DataEmpty from './component/DataEmpty';

const tabTitles = ['主页', '我的咨询', '我的服务', '个人中心'];

const tabIcon = [
    require('../images/tabbar_1.png'),
    require('../images/tabbar_2.png'),
    require('../images/tabbar_3.png'),
    require('../images/tabbar_4.png')
]

const tabSelectedIcon = [
    require('../images/tabbar_1_press.png'),
    require('../images/tabbar_2_press.png'),
    require('../images/tabbar_3_press.png'),
    require('../images/tabbar_4_press.png')
]


const MyTab = TabNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions: () => TabOptions('首页', tabIcon[0], tabSelectedIcon[0], '首页', '#FFEC8B', 'gray'),
    },
    MyConsult: {
        screen: MyConsult,
        navigationOptions: () => TabOptions('我的咨询', tabIcon[1], tabSelectedIcon[1], '我的咨询', '#FFEC8B', 'gray'),
    },
    MyService: {
        screen: MyService,
        navigationOptions: () => TabOptions('我的服务', tabIcon[2], tabSelectedIcon[2], '我的服务', '#FFEC8B', 'gray'),
    },
    MyCenter: {
        screen: MyCenter,
        navigationOptions: () => TabOptions('个人中心', tabIcon[3], tabSelectedIcon[3], '个人中心', '#FFEC8B', 'gray'),
    },


},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none',
    tabBarOptions:{
        // 安卓属性
        showIcon:true, // 是否显示图标，默认关闭。
        // style:{}, // tabbar的样式。
        labelStyle:{
            marginTop: 0,
            marginBottom: -3,
            fontSize: 12
        }, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        tabStyle:{
            height: 55,
        }, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // iconStyle:{}, // 图标的样式。
    }
});

const MyNav = StackNavigator({
    MyTab:{
        screen: MyTab,
    },
    HomeScene:{
        screen: HomeScene
    },
    LoginScreen:{
        screen: LoginScreen,
        navigationOptions: {
            headerTitle:'登录'
        }
    },
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: {
            headerTitle:'注册'
        }
    },
    Config: {
        screen: Config,
        navigationOptions: {
            headerTitle:'设置'
        }
    },
    PersonInfo: {
        screen: PersonInfo,
        navigationOptions: {
            headerTitle:'个人信息'
        }
    },
    DataEmpty: {
        screen: DataEmpty
    },
    MyCount: {
        screen: MyCount,
        navigationOptions: {
            headerTitle:'我的账户'
        }
    },
    CountDetil: {
        screen: CountDetil,
        navigationOptions: {
            headerTitle: '账户明细'
        }
    },
    AddPatient: {
        screen: AddPatient,
        navigationOptions: {
            headerTitle: '编辑就诊人信息'
        }
    }
},{

});




const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle, headBackgroundColor, color) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            <Image
                source={!focused? normalImage: selectedImage}
                style={{width: 24, height: 25}}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:16, color:color, alignSelf:'center'};
    const headerStyle = {backgroundColor:headBackgroundColor};
    const tabBarVisible = true;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};

export default MyNav;