import React, { useState, useEffect} from "react";
import { View , Text, TouchableOpacity, Image} from "react-native";
//data
import {data} from '../../quizData/population';

//util functions
import {validateAnswer} from "../utils/utilFuncs";

//components
import Button from "../components/Button";
import Modal from "../components/Modalcomp";
import Header from "../components/Header";
import COLORS from "../../assets/colors/colors";

const Population=({navigation,route})=>{
    
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
        nextQuestionCorrectOption: data.length-1 > question ? data[question+1].correctOptionId : null,
        gamemode:"population",
        lastQuestion:data.length-1
        }
        const modalData={
            score,
            length:data.length,
            navigation,
            gamemode:"population",
            setRandomizeData:route.params.setRandomizeData,
            randomizeData:route.params.randomizeData
        }
        const headerData={
            question,
            score,
            length:data.length,
            header:COLORS.POPULATION.header,
            headerText:COLORS.POPULATION.headerText,
        }
        
    const renderQuestion=()=>{
        return(
            <View style={{
                backgroundColor:COLORS.POPULATION.background,
                width:"100%",
                height:"100%"
                }}>
                <Header data={headerData} />
                <View style={{
                    alignItems:"center",
                    justifyContent:"center"
                    }}>
                        <View style={{
                            marginVertical:10
                        }}>
                            <Text style={{
                                color:"#fff",
                                fontSize:26,
                                fontWeight:"bold",
                                textAlign:"center"
                                }}>
                                Which country is larger by population
                                </Text>
                        </View>
                        {/* //container view */}
                        <View style={{    
                            backgroundColor:COLORS.POPULATION.header,
                            borderRadius:30,
                            width:"90%",
                            justifyContent:"center",
                            alignItems:"center",
                            height:390
                        }}>
                        {data[question].options.map((country,value)=>{
                            return(
                                <View key={country.id} style={{
                                    justifyContent:"center",
                                    alignItems:"center",
                                    paddingVertical:5,
                                    paddingBottom:10
                                }}>
                                    <Text style={{
                                        fontSize:22,
                                        fontWeight:"bold"
                                        }}>
                                            {data[question].options[value].name}
                                    </Text>
                                    {showButton && 
                                        <Text style={{
                                            color:"#ffffff",
                                            textAlign:"center",
                                            fontWeight:"bold",
                                            fontSize:24
                                            }}>
                                            {data[question].options[value].population}
                                        </Text>
                                    }
                                    <TouchableOpacity 
                                    onPress={()=>{
                                        validateAnswer(country.id,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton)
                                    }}
                                    disabled={btnDisabled}
                                    >
                                        <Image 
                                        source={data[question].options[value].imgUrl}
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
                {showButton ? <Button data={btnData} style={{backgroundColor:COLORS.POPULATION.header}}/> : null}
                {showModal ? <Modal data={modalData} /> : null}
                </View>
            </View>
        )
    }
   
    return (
        <View >
            {renderQuestion()}
        </View>
    )
}

export default Population;