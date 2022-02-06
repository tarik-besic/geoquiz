import React, { useState } from "react";
import { View , Text, TouchableOpacity, Image} from "react-native";
//data
import data from '../../quizData/population';

//util functions
import {validateAnswer} from "../utils/utilFuncs";

//components
import Button from "../components/Button";
import Modal from "../components/Modalcomp";

const Population=({navigation})=>{
    const [question,setQuestion]=useState(0);
    const [showButton,setShowButton]=useState(false);
    const [score,setScore]=useState(0);
    const [correctOption,setCorrectOption]=useState(data[question].correctOptionId);
    const [btnDisabled,setBtnDisabled]=useState(false); //if user can select options 
    const [showModal,setShowModal]=useState(false);
    const [currentOptionSelected,setCurrentOptionSelected]=useState(null);

    const btnData={
        question,
        setQuestion,
        setCorrectOption,
        setCurrentOptionSelected,
        setShowButton,
        setBtnDisabled,
        setShowModal,
        gamemode:"population"
        }
        const modalData={
            score,
            length:data.length,
            navigation,
            gamemode:"population"
        }
    
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
                                        <Text style={{color:"#ffffff"}}>
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
                {showButton ? <Button data={btnData} /> : null}
                {showModal ? <Modal data={modalData} /> : null}
            </View>
        )
    }
   
    return (
        <View style={{         
            backgroundColor:"#000000",
            width:"100%",
            height:"100%"
        }}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{marginLeft:5, fontSize:24, color:"#22AE0B"}}>Score: {score}</Text> 
                <Text style={{marginRight:5, fontSize:24, color:"#ffffff"}}>{question+1}/ {data.length}</Text>
            </View>

            {renderQuestion()}
        </View>
    )
}

export default Population;