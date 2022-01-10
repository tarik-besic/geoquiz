import React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Home=()=>{
    const navigation=useNavigation();
    return (
    <View>
        <View style={{marginVertical:20}}>
            <Text style={{fontSize:20,fontWeight:"700", textAlign:"center"}}>
                GeoQuiz
            </Text>
        </View>

        <View>
            <TouchableOpacity 
            style={{
                            backgroundColor:"#0D7377",
                            justifyContent:"center",
                            alignItems:"center",
                            marginHorizontal:20,
                            marginVertical:10,
                            flexDirection:"row",
                            height:75
                        }}
            onPress={()=>{
                navigation.navigate("Flags")
            }}          
            >
                <Text>
                    FLAGS
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                                backgroundColor:"#0D7377",
                                justifyContent:"center",
                                alignItems:"center",
                                marginHorizontal:20,
                                marginVertical:10,
                                flexDirection:"row",
                                height:75
                            }}
                onPress={()=>{
                    navigation.navigate("Monuments");
                    }}>
                <Text>
                    MONUMENTS
                </Text>
            </TouchableOpacity>
        
            <TouchableOpacity
                style={{
                            backgroundColor:"#0D7377",
                            justifyContent:"center",
                            alignItems:"center",
                            marginHorizontal:20,
                            marginVertical:10,
                            flexDirection:"row",
                            height:75
                        }}
                onPress={()=>navigation.navigate("Population")}
                >
                <Text>
                    POPULATION
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },  
    btn:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,
        backgroundColor:"#c4c4c4",
        marginHorizontal:40
    },
    text:{
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Home;