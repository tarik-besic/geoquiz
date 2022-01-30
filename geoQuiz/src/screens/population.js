import React, { useState } from "react";
import { Button, StyleSheet, View , Text, TouchableOpacity, Image, Modal} from "react-native";
import data from '../../quizData/population';

import {nextQuestion,renderModal,validateAnswer} from "../utils/utilFuncs";

const Population=({navigation})=>{
    const [question,setQuestion]=useState(0);
    const [showButton,setShowButton]=useState(false);
    const [score,setScore]=useState(0);
    const [correctOption,setCorrectOption]=useState(data[question].correctOptionId);
    const [btnDisabled,setBtnDisabled]=useState(false); //if user can select options 
    const [showModal,setShowModal]=useState(false);
    const [currentOptionSelected,setCurrentOptionSelected]=useState(null);

    const renderQuestion=()=>{
        return(
            <View>
                <View>
                    <View>
                        {data[question].countries.map((country,value)=>{
                            return(
                                <View key={country.id}>
                                    <Text>{data[question].countries[value].name}</Text>
                                    {showButton && 
                                        <Text style={styles.populationText}>
                                            {data[question].countries[value].population}
                                        </Text>
                                    }
                                    <TouchableOpacity 
                                    onPress={()=>{
                                        validateAnswer(country.id,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton)
                                    }}
                                    disabled={btnDisabled}
                                    >
                                        <Image 
                                        source={data[question].countries[value].imgUrl}
                                        style={{
                                            width: 180,
                                            height:110,
                                            borderWidth:5,
                                            borderColor: showButton ? country.id==correctOption ? "#49FF00" : country.id==currentOptionSelected ? "red" : 0 : 0 //ako si selekto, da li je to tacno, ako jeste onda samo ide u zelenu, else gledam da li si selekto drugu drzavu ako jesi ide u crveno i ako nisi selekto nikako jos uvijek onda nema bordera
                                        }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>

                {renderButton()}
                {renderModal(score,data.length,showModal,navigation)}
            </View>
        )
    }
    const renderButton=()=>{
        if(showButton)
        {
            return(
                <View style={{ justifyContent:"center",alignItems:"center",marginTop:80 }}>
                    <TouchableOpacity onPress={()=>{
                        nextQuestion(question,setQuestion,setCorrectOption,setCurrentOptionSelected,setShowButton,setBtnDisabled,setShowModal,'population');
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
                <Text style={{marginRight:5, fontSize:24, color:"#ffffff"}}>{question+1}/ {data.length}</Text>
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