import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
//data
import data from "../../quizData/monument-data";
//quiz functions
import {validateAnswer} from "../utils/utilFuncs";

//components
import Button from "../components/Button";
import Modal from "../components/Modalcomp";

const Monument=()=>{
    const navigation=useNavigation();
    const [question, setQuestion] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [score, setScore] = useState(0);
    const [correctOption, setCorrectOption] = useState(data.questions[question].correctOptionId);
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
        gamemode:"monuments"
        }
    const modalData={
        score,
        length:data.questions.length,
        navigation,
        gamemode:"monuments"
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
                            style={{backgroundColor: showButton ? option.optionId==data.questions[question].correctOptionId ? "#49FF00" : option.optionId==currentOptionSelected  ? "red" : "gray" : "gray",
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
                    {showButton&& <Button data={btnData}/>}
                </View>
                {showModal ? <Modal data={modalData} /> : null}
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