import React, { useState } from "react";
import {View , Text, Image, TouchableOpacity} from "react-native";

//data
import {data} from "../../quizData/flag-data";

//quiz functions
import {validateAnswer} from "../utils/utilFuncs";
//images
import correctCircle from "../../assets/images/circleC.png"
import wrongCircle from "../../assets/images/circleW.png"

//components
import Button from "../components/Button";
import Modal from "../components/Modalcomp";

const Flags=({navigation,route})=>{

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
        nextQuestionCorrectOption: data.length-1 > question ? data[question+1].correctOptionId : null,
        gamemode:"flags",
        lastQuestion:data.length-1
        }
    const modalData={
        score,
        length:data.length,
        navigation,
        gamemode:"flags",
        setRandomizeData:route.params.setRandomizeData,
        randomizeData:route.params.randomizeData
    }

    const renderQuestion=()=>{
        return(
                <View style={{
                     backgroundColor: '#EEEEEE',
                     height:"100%"
                    }}>
                    <View style={{
                        flexDirection:"row",
                        height:56,
                        justifyContent:"space-between",
                        alignItems:"center",
                        backgroundColor: '#222831',
                        borderTopLeftRadius:0,
                        borderTopRightRadius:0,
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                        paddingHorizontal:15,
                        borderBottomWidth:2,
                        borderBottomColor:'#00000011', 
                    }}>
                        <Text style={{marginLeft:5, fontSize:25,fontWeight:"bold",color:"#00ADB5",}}>Score: {score}</Text> 
                        <Text style={{marginRight:5, fontSize:25,fontWeight:"bold",color:"#00ADB5",}}>{question+1}/ {data.length}</Text>
                    </View>
                    <View style={{
                        alignItems:'center',
                        justifyContent:"center"
                    }}>
                        <Text style={{
                            fontSize:30,
                            color:"#393E46",
                            marginTop:15,
                            fontWeight:"bold"
                            }}>
                            Guess the Country
                        </Text>

                        <View >
                            <Text style={
                                {
                                fontSize:25,
                                fontWeight:"bold",
                                color: currentOptionSelected==data[question].correctOptionId ? "#49FF00" : btnDisabled ? "#D72323" : "#393E46"
                                }} >
                                {data[question].question}
                            </Text>
                            <View style={{justifyContent:"center",alignItems:"center",marginBottom:25}}>
                            {currentOptionSelected==data[question].correctOptionId ? <Image source={correctCircle} style={{width:35,height:35}}/> : currentOptionSelected!=null ? <Image source={wrongCircle} style={{width:35,height:35}}/> : null}
                            </View>
                        </View>

                        <View style={{
                            flexDirection:"row",
                            flexWrap:"wrap",
                            justifyContent:"space-evenly",
                            backgroundColor:"#222831",
                            borderTopEndRadius:30,
                            borderTopStartRadius:30,
                            borderBottomEndRadius:30,
                            borderBottomStartRadius:30,
                            paddingVertical:35,
                            width:"95%"
                            }}>
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
                                        <Image source={option.imgUrl} style={{width: 150, height:90}} />
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        {showButton ? <Button data={btnData}/> : null}
                        {showModal ? <Modal data={modalData}/> : null}
                    </View>
                </View>
        )
    }
    return (
        <View>
            {renderQuestion()}
        </View>
    )
}
export default Flags;