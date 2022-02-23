import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { shuffleMonuments } from "../../quizData/monument-data";
import { shufflePopulation } from "../../quizData/population";
import { shuffleFlags } from "../../quizData/flag-data";
import { LogBox } from 'react-native';
import bgImage from "../../assets/images/bgImage.png";
import logo from "../../assets/images/logo.png";
LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);

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
        <ImageBackground source={bgImage} style={{
            width:"100%",
            height:"100%"
            }}>
            <View style={{
                marginVertical:20,
                justifyContent:"center",
                alignItems:"center"
                }}>
                <Image source={logo} />
                <Text style={{fontSize:25,color:"#ffffff"}}>
                    GeoQuiz
                </Text>
            </View>

            <View style={{
                justifyContent:"center",
                alignItems:"center",
                marginTop:40
                }}>
                <TouchableOpacity 
                style={{...styles.btn, backgroundColor:"#529f4685"}}
                onPress={()=>{
                    navigation.navigate("Flags",{setRandomizeData,randomizeData})
                }}          
                >
                <Text style={styles.text}>
                    FLAGS
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{...styles.btn, backgroundColor:"#d9d229a8"}}
                    onPress={()=>{
                        navigation.navigate("Monuments",{setRandomizeData,randomizeData});
                        }}>
                <Text style={styles.text}>
                    MONUMENTS
                </Text>
                </TouchableOpacity>
            
                <TouchableOpacity
                    style={{...styles.btn, backgroundColor:"#4EB4D1"}}
                    onPress={()=>navigation.navigate("Population",{setRandomizeData,randomizeData})}>

                <Text style={styles.text}>
                    POPULATION
                </Text>
                
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
        height:75,
        width:"70%",
        borderRadius:17,        
    },
    text:{
        fontSize:20,
        color:"#ffffff", 
        textAlign:"center"
        }
    }
)

export default Home;