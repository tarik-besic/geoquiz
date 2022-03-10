import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

//quiz functions
import {validateAnswer} from "../utils/utilFuncs";
//data
import {data} from "../../quizData/monument-data";
//components
import Button from "../components/Button";
import Modal from "../components/Modalcomp";
import Header from "../components/Header";

//COLORS
import COLORS from "../../assets/colors/colors";

const Monument=({navigation,route})=>{
    
    const [question, setQuestion] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [score, setScore] = useState(0);
    const [correctOption, setCorrectOption] = useState(data[question].correctOptionId);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [showModal,setShowModal]=useState(false);
    
    const btnData={
        question,
        setQuestion,
        setCorrectOption,
        setCurrentOptionSelected,
        setShowButton,
        setBtnDisabled,
        setShowModal,
        nextQuestionCorrectOption: data.length-1 > question ? data[question+1].correctOptionId : null,
        gamemode:"monuments",
        lastQuestion:data.length-1
        }
    const modalData={
        score,
        length:data.length,
        navigation,
        gamemode:"monuments",
        setRandomizeData:route.params.setRandomizeData,
        randomizeData:route.params.randomizeData
    }
    const headerData={
        question,
        score,
        length:data.length,
        header:COLORS.MONUMENTS.header,
        headerText:COLORS.MONUMENTS.headerText,
    }
    const renderQuestion=()=>{
        return(
            <View style={{
                backgroundColor:COLORS.MONUMENTS.background,
                width:"100%",
                height:"100%",
                }}>
                    <Header data={headerData}/>
                <View style={{
                    justifyContent:"center",
                    alignItems:'center'
                }}>
                        <Text style={{
                            fontSize:20,
                            fontWeight:"bold",
                            color:COLORS.MONUMENTS.heading,
                            marginBottom:10
                        }}>
                            WHAT'S THE NAME OF THIS MONUMENT
                        </Text>
                    <View>
                        <Image 
                        source={data[question].imgUrl}
                        style={{
                            width:200,
                            height:200,
                            borderRadius:10
                        }}
                        />
                    </View>
                    <View>
                        {data[question].options.map((option)=>{
                            return(
                                <TouchableOpacity key={option.optionId}
                                onPress={()=>validateAnswer(option.optionId,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton)}
                                disabled={btnDisabled}
                                style={{backgroundColor: showButton ? option.optionId==data[question].correctOptionId ? "#49FF00" : option.optionId==currentOptionSelected  ? "red" : COLORS.MONUMENTS.gray : COLORS.MONUMENTS.gray,
                                width:290,
                                height:45,
                                borderRadius:15,
                                marginVertical:8,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                                >
                                    <Text style={{
                                        fontSize:22,
                                        fontWeight:"500",
                                        color:COLORS.MONUMENTS.white
                                        }}>
                                        {option.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View>
                        {showButton&& <Button data={btnData}/>}
                    </View>
                    {showModal ? <Modal data={modalData} style={{background:"#4EB4D1"}}/> : null}
                </View>                
            </View>
        )   
    }
    
    return(
        <View>
        {
            renderQuestion()
        }
        </View>
    )
}
export default Monument