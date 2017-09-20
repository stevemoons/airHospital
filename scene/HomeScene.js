/**
 *  Created by wjy 17-9-13
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class HomeScene extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <Text>登录成功!这是主页!</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
