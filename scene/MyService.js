/**
 *  Created by wjy 17-9-13
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class HomeScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textview}>

                    <Image source={require('../images/service.jpg')} style={styles.headerpic}/>
                </View>
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
    headerpic: {
        width: screenWidth,
        height: 120
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
});
