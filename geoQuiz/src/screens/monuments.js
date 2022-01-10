import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Monument=()=>{
    const navigation=useNavigation();
    return(
        <View styles={styles.container}>
            <Text>
                Monument Screen
            </Text>
            
            <TouchableOpacity
             style={{backgroundColor:"#000"}}
             onPress={()=>{
                 navigation.navigate("Home")
             }}>
                <Text style={{color:"#fff"}}>
                    Vrati se
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Monument