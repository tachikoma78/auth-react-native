import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
   const { inputStyle, labelStyle, containerStyle, labelWrapper } = styles;

    return (
       <View style={containerStyle}>  
            <View style={labelWrapper}>
                <Text style={labelStyle}> { label }</Text>
            </View>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={false}
                underlineColorAndroid='transparent' // for android bug
                secureTextEntry={secureTextEntry}
            />
        </View>
    ); 
};

const styles = {
    inputStyle: {
        color: '#9900cc',
        paddingRight: 5,
        paddingLeft: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 18,
        paddingBottom: 0, //bug in android
        flex: 2,
        lineHeight: 23, // Android
        height: 42, // iOS
        textAlign: 'left',
        backgroundColor: '#efefef',
        textAlignVertical: 'top' // Android only
    },
    labelWrapper: {
        height: 23,
        flex: 1
    },
    labelStyle: { 
        color: '#39004d',
        fontSize: 18,
        paddingLeft: 5,
        height: 20
    },
    containerStyle: {
        height: 42,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
