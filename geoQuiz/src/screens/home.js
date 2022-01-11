import React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Home=()=>{
    const navigation=useNavigation();
    return (
    <View>
        <View style={{marginVertical:20}}>
            <Text style={styles.text}>
                GeoQuiz
            </Text>
        </View>

        <View>
            <TouchableOpacity 
            style={styles.btn}
            onPress={()=>{
                navigation.navigate("Flags")
            }}          
            >
            <Text>
                FLAGS
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={()=>{
                    navigation.navigate("Monuments");
                    }}>
            <Text>
                MONUMENTS
            </Text>
            </TouchableOpacity>
        
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate("Population")}>

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
        backgroundColor:"#0D7377",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:20,
        marginVertical:10,
        flexDirection:"row",
        height:75
    },
    text:{
        fontSize:20,
        fontWeight:"700", 
        textAlign:"center"
        }
    }
)

export default Home;