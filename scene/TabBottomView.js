/**
 *  Created by wjy 17-9-13
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBottom from './component/TabBottom';
import MainScreen from './MainScreen';
import MyCenter from './MyCenter';
import MyConsult from './MyConsult';
import MyService from './MyService';


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

export default class Main extends Component {

    onChangeTabs = ({i}) => 'light-content';
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() =>
                    <TabBottom
                        tabNames={tabTitles}
                        tabIconNames={tabIcon}
                        selectedTabIconNames={tabSelectedIcon}/>}
                        tabBarPosition='bottom'
                        onChangeTab={this.onChangeTabs}>

                <MainScreen  navigator={this.props.navigator}/>
                <MyConsult  navigator={this.props.navigator}/>
                <MyService  navigator={this.props.navigator}/>
                <MyCenter  navigator={this.props.navigator}/>
            </ScrollableTabView>
        );
    }
}