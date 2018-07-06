//Import Library
import React from 'react'
import {Text,View} from 'react-native'


//Add component
const Header = ({headerText}) =>{

const {textStyle, viewStyle} = styles;
    return(
        <View style ={viewStyle}>
            <Text style = {textStyle}> {headerText} </Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{ width: 0, height: 2},
        shadowOpacity: 0.5

    },
    textStyle: {
        fontSize: 30
    }
}

//Make available to other part of the app
export {Header};
