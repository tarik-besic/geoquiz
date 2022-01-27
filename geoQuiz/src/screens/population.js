import React, { useState } from "react";
import { Button, StyleSheet, View , Text, TouchableOpacity, Image} from "react-native";
import data from '../../quizData/population';

import {nextQuestion} from "../utils/utilFuncs";

const Population=()=>{
    const [question,setQuestion]=useState(0);
    const [showButton,setShowButton]=useState(false);
    const [score,setScore]=useState(0);
    const [currentOptionSelected,setCurrentOptionSelected]=useState(null);
    const [correctOption,setCorrectOption]=useState(null);
    const [btnDisabled,setBtnDisabled]=useState(false); //if user can select options 
    const [showModal,setShowModal]=useState(false);

    const validation=(first,second)=>{
        first=Number(first.split(" ")[0]);
        second=Number(second.split(" ")[0]);
        setCurrentOptionSelected(first);
        if(first > second)
            {
                setScore(score+1);
                console.log("Pogodio si")
                setCorrectOption(first);
            }
            else
                setCorrectOption(first);
        setShowButton(true);
    }

    const renderQuestion=()=>{
        return(
            <View>
                <View>
                    <View>
                        <Text>{data[question].name}</Text>
                        {showButton && 
                            <Text style={styles.populationText}>
                                {data[question].population}
                            </Text>
                        }
                        <TouchableOpacity onPress={()=>{
                            validation(data[question].population,data[question+1].population)
                        }}>
                            <Image 
                            source={data[question].imgUrl}
                            style={styles.imageBorder}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        {showButton && 
                            <Text style={styles.populationText}>
                                {data[question+1].population}
                            </Text>
                        }
                        <Text>{data[question+1].name}</Text>
                        <TouchableOpacity onPress={()=>{
                            validation(data[question+1].population,data[question].population)
                        }}>
                            <Image 
                            source={data[question+1].imgUrl}
                            style={styles.imageBorder}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {renderButton()}
            </View>
        )
    }
    const renderButton=()=>{
        if(showButton)
        {
            return(
                <View style={{ justifyContent:"center",alignItems:"center",marginTop:80 }}>
                    <TouchableOpacity onPress={()=>{
                        nextQuestion(question,setQuestion,setCorrectOption,"",setShowButton,setBtnDisabled,setShowModal,'population');
                    }} style={{backgroundColor:"#c4c4c4", width:256,height:75,borderRadius:20,alignItems:"center",justifyContent:"center",backgroundColor:"#0C7B93"}}>
                    <Text style={{fontSize:20,color:"white"}}>Next question</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else
            return null;
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{marginLeft:5, fontSize:24, color:"#22AE0B"}}>Score: {score}</Text> 
                <Text style={{marginRight:5, fontSize:24, color:"#ffffff"}}>{question+1}/ {data.length/2}</Text>
            </View>

            {renderQuestion()}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#000000",
        width:"100%",
        height:"100%"
    },
    populationText:{
        color:"#ffffff"
    },
    imageBorder:{
        borderWidth: 5,
        borderColor: currentOptionSelected ? currentOptionSelected==correctOption ? "green" : "red" : 0 //if user selcted something, if correct then green border else red 
    }
})

export default Population;