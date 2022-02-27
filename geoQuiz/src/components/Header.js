import React from 'react';
import {View,Text} from 'react-native';

const Header = ({data}) => {
  return (
    <View>
        <View style={{
            flexDirection:"row",
            height:56,
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor: data.header,
            borderTopLeftRadius:0,
            borderTopRightRadius:0,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal:15,
            borderBottomWidth:2,
            borderBottomColor:'#00000011', 
        }}>
            <Text style={{marginLeft:5, fontSize:25,fontWeight:"bold",color:data.headerText}}>Score: {data.score}</Text> 
            <Text style={{marginRight:5, fontSize:25,fontWeight:"bold",color:data.headerText}}>{data.question+1}/ {data.length}</Text>
        </View>
      </View>
  )
}

export default Header;