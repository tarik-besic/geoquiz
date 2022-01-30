import React from "react";
import monumentData from "../../quizData/monument-data";
import flagData from "../../quizData/flag-data";
import populationData from '../../quizData/population';
import { Modal,View, TouchableOpacity, Text } from "react-native";

const validateAnswer=(id,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton)=>{
    setBtnDisabled(true);
    setCurrentOptionSelected(id);
    if(id==correctOption)
    {
        setScore(score+1);   
    }
    setShowButton(true);
}
const nextQuestion=(question,setQuestion,setCorrectOption,setCurrentOptionSelected,setShowButton,setBtnDisabled,setShowModal,gamemode)=>{
    //quizLength
    let lastQuestion=gamemode=="flags" ? flagData.length-1 : gamemode=="monuments" ? monumentData.questions.length-1 : populationData.length-1;
    if(question==lastQuestion)
    {
        //last question
        setShowModal(true);
    }
else{
    setQuestion(question+1);
    if(gamemode=="monuments")
        setCorrectOption(monumentData.questions[question+1].correctOptionId)
    else
        if(gamemode=="flags")
            setCorrectOption(flagData[question+1].correctOptionId)
        else
            setCorrectOption(populationData[question+1].correctOptionId)
    setCurrentOptionSelected(null);
    setShowButton(false);
    setBtnDisabled(false)
}
}

const renderModal=(score,length,showModal,navigation)=>{
    if(showModal)
    return(
            <Modal visible={true}>
                <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#142850"}}>
                    <View style={{width:350,height:250,backgroundColor:"#fff",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:25,fontWeight:"bold",color:"#000"}}>
                            {score > 2 ? "Congratulations!" : "Better luck next time"}
                        </Text>
                        <Text style={{
                            fontSize:30,
                            marginVertical:25,
                            color: score>2 ? "#10D610" : "red"
                            
                            }}>{score} / {length}</Text>
                    <TouchableOpacity 
                        onPress={()=>{
                            navigation.navigate("Home")
                        }}
                        style={{
                            backgroundColor:"#4EB4D1",
                            width:200,
                            height:60,
                            borderRadius:20,
                            justifyContent:"center",
                            alignItems:"center"
                        
                        }}
                        >
                        <Text style={{fontSize:25,color:"#2d2d2d"}}>Continue</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    )
    else return null
}

export {
    validateAnswer,
    nextQuestion,
    renderModal
} 
