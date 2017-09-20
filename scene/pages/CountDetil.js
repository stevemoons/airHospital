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
    ListView,
    Platform, Button, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS, ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import px2dp from '../../util/px2dp';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';
import newData from '../../data/localData.json';

import {PullList} from 'react-native-pull';

export default class MyCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
        };
    }
    renderRow(rowData){
        return(
            <View style={styles.itemStyle}>
                <Icon name="md-card" size={px2dp(16)} style={{marginRight: -70, marginLeft:-20, color: '#6495ED'}}/>
                <Text style={{fontSize:13, color:rowData.title == '充值'? 'blue':'green'}}>{rowData.title}</Text>
                <Text style={{ fontSize:13, color:'green'}}>{rowData.count}</Text>
                <Text style={{ fontSize:13, color:'blue'}}>{rowData.time}</Text>
            </View>
        );
    }
    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData)
        });
    }

    // 组件加载完成后调用
    componentDidMount() {
        // 刷新数据
        this.fetchData();
    }
    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}/>
                </ScrollView>
            </View>
        )
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
    itemStyle: {
        // 主轴方向
        flexDirection:'row',
        // 下边框
        borderBottomWidth:0.7,
        borderBottomColor:'gray',
        justifyContent:'space-around',
        alignItems: 'center',
        height: 50
    }
});