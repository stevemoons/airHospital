import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS, ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import px2dp from '../../util/px2dp';

export default class DataEmpty extends Component {
    static navigationOptions = {
        headerTitle: ({ state }) => `Chat with ${state.params.text}`
    }
    constructor(props) {
        super(props);
    }

    renderButton(params) {
        if(params.operate) {
            return(
                <TouchableOpacity
                    onPress={()=> {const { navigate } = this.props.navigation; navigate(params.go);}}
                    style={styles.button}>
                    <Text style={styles.btText}>{params.operate}</Text>
                </TouchableOpacity>
            )
        }
    }


    render() {
        const { params } = this.props.navigation.state;

        return(
            <View style={styles.container}>
                <View style={styles.IconBack}>
                    <Icon name="md-clipboard" size={px2dp(48)} style={{color: '#fff'}}/>
                </View>
                <Text style={{marginTop: 20}}>{params.text}</Text>
                <View style={styles.btnView}>
                    {this.renderButton(params)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    IconBack: {
        width: 80,
        height: 80,
        borderRadius: 60,
        backgroundColor: '#D1D1D1',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 100
    },
    btnView: {
        height: px2dp(270),
        justifyContent: 'flex-end'
    },
    button: {
        height: 35,
        width: px2dp(200),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#66f',
        marginBottom: 8
    },
    btText: {
        color: '#fff',
    },
});