import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
//data
import data from "../../quizData/monument-data";
//quiz functions
import {validateAnswer,nextQuestion} from "../utils/utilFuncs";
const Monument=()=>{
    const navigation=useNavigation();
    const [question, setQuestion] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [score, setScore] = useState(0);
    const [correctOption, setCorrectOption] = useState(data.questions[question].correctOptionId);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [showModal,setShowModal]=useState(false);
    
    const renderButton=()=>{
        if(showButton)
        {
            return(
                <View style={{ justifyContent:"center",alignItems:"center",marginTop:80 }}>
                    <TouchableOpacity onPress={()=>{
                        nextQuestion(question,setQuestion,setCorrectOption,setCurrentOptionSelected,setShowButton,setBtnDisabled,setShowModal,'monuments');
                    }} style={{backgroundColor:"#c4c4c4", width:256,height:75,borderRadius:20,alignItems:"center",justifyContent:"center",backgroundColor:"#0C7B93"}}>
                    <Text style={{fontSize:20,color:"white"}}>Next question</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else
            return null;
    }
    const renderQuestion=()=>{
        return(
            <View style={{backgroundColor:"#d2d2d2",width:"100%",height:"100%"}}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{marginLeft:5, fontSize:24, color:"#22AE0B"}}>Score: {score}</Text> 
                        <Text style={{marginRight:5, fontSize:24, color:"#ffffff"}}>{question+1}/ {data.questions.length}</Text>
                    </View>
                <View>
                    <Text>
                        {data.staticQuestionName}
                    </Text>
                </View>
                <View>
                    <Image 
                    source={data.questions[question].imgUrl}
                    style={{width:100,height:100}}
                    />
                </View>
                <View>
                    {data.questions[question].options.map((option)=>{
                        return(
                            <TouchableOpacity key={option.optionId}
                            onPress={()=>validateAnswer(option.optionId,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton)}
                            disabled={btnDisabled}
                            style={{backgroundColor: option.optionId==correctOption ? "green" : option.optionId== currentOptionSelected ? "red" : "gray" ,
                            width:300,
                            height:50,
                            borderRadius:15,
                            marginVertical:10,
                            justifyContent:'center',
                            alignItems:'center'}}
                            >
                                <Text style={{fontSize:24,fontWeight:"500"}}>
                                    {option.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View>
                    {renderButton()}
                </View>
                {showModal &&
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
                                            
                                            }}>{score} / {data.questions.length}</Text>
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
                        }
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
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Monument