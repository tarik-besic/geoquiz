import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { shuffleMonuments } from "../../quizData/monument-data";
import { shufflePopulation } from "../../quizData/population";
import { shuffleFlags } from "../../quizData/flag-data";

const Home=({navigation,route})=>{
    const [randomizeData,setRandomizeData] = useState(false);
    //randoming data in home screen
    useEffect(()=>{
        if(randomizeData)
        {
            route.params?.gamemode=="flags" ? shuffleFlags() : route.params?.gamemode=="monuments" ? shuffleMonuments() : shufflePopulation()
            setRandomizeData(false);
        }
    },[randomizeData])
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
                navigation.navigate("Flags",{setRandomizeData,randomizeData})
            }}          
            >
            <Text>
                FLAGS
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={()=>{
                    navigation.navigate("Monuments",{setRandomizeData,randomizeData});
                    }}>
            <Text>
                MONUMENTS
            </Text>
            </TouchableOpacity>
        
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate("Population",{setRandomizeData,randomizeData})}>

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