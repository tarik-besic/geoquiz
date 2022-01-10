import React from "react";
import { Button, StyleSheet, View , Text} from "react-native";

const Population=()=>{

    return (
        <View style={styles.container}>
            <Text>
                POPULATION GAMEMODE
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },  
})

export default Population;