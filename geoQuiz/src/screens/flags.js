import React, { useState } from "react";
import {StyleSheet, View , Text, Image, TouchableOpacity, SafeAreaView, Modal} from "react-native";

//data
import data from "../../quizData/flag-data";

//quiz functions
import {validateAnswer,renderModal,nextQuestion} from "../utils/utilFuncs";
//images
import correctCircle from "../../assets/images/circleC.png"
import wrongCircle from "../../assets/images/circleW.png"

//components
import Button from "../components/Button";

const Flags=({navigation})=>{

    const [question,setQuestion]=useState(0);
    const [showButton,setShowButton]=useState(0);
    const [score,setScore]=useState(0);
    const [correctOption,setCorrectOption]=useState(data[question].correctOptionId);
    const [currentOptionSelected,setCurrentOptionSelected]=useState(null);
    const [btnDisabled,setBtnDisabled]=useState(false); //if user can select options 
    const [showModal,setShowModal]=useState(false);

    const btnData={
        question,
        setQuestion,
        setCorrectOption,
        setCurrentOptionSelected,
        setShowButton,
        setBtnDisabled,
        setShowModal,
        gamemode:"flags"
        }
    const modalData={

    }

    const renderQuestion=(id)=>{
        return(
                <View style={{ backgroundColor: '#142850',height:"100%"}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{marginLeft:5, fontSize:24, color:"#22AE0B"}}>Score: {score}</Text> 
                        <Text style={{marginRight:5, fontSize:24, color:"#ffffff"}}>{question+1}/ {data.length}</Text>
                    </View>
                    <View >
                        <Text style={{textAlign:"center", fontSize:30,color:"#fff",marginVertical:30}}>
                            Guess the Country
                        </Text>

                        <View >
                            <Text style={
                                {textAlign:"center",
                                fontSize:30,
                                marginBottom:30,
                                fontWeight:"bold",
                                color: currentOptionSelected==data[question].correctOptionId ? "#49FF00" : btnDisabled ? "#D72323" : "#c4c4c4"
                                }} >
                                {data[question].question}
                            </Text>
                            <View style={{justifyContent:"center",alignItems:"center",marginBottom:25}}>
                            {currentOptionSelected==data[question].correctOptionId ? <Image source={correctCircle}/> : currentOptionSelected!=null ? <Image source={wrongCircle}/> : null}
                            </View>
                        </View>

                        <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                            {data[question].options.map(option=>{
                                return(
                                    <TouchableOpacity 
                                    key={option.optionId}
                                    onPress={()=>{
                                        validateAnswer(option.optionId,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton) //answer validation
                                    }}
                                    disabled={btnDisabled} //setting to disabled if select i disabled
                                    style={{
                                        marginVertical:5,
                                        borderWidth:4,
                                        borderColor: showButton ? (option.optionId==correctOption) ? "#49FF00" : option.optionId==currentOptionSelected ? "#D72323" : 0 : 0
                                    }}
                                    >
                                        <Image source={option.imgUrl} style={{width: 180, height:110}} />
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        {showButton&& <Button data={btnData}/>}
                        {renderModal(score,data.length,showModal,navigation,"flags")}
                    </View>
                </View>
        )
    }
    return (
        <View>
            {renderQuestion(question)}
        </View>
    )
}
export default Flags;