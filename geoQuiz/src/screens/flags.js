import React, { useState } from "react";
import { Button, StyleSheet, View , Text, Image, TouchableOpacity, SafeAreaView, Modal} from "react-native";

//data
import data from "../../quizData/flag-data";

//images
import correctCircle from "../../assets/images/circleC.png"
import wrongCircle from "../../assets/images/circleW.png"

const Flags=({navigation})=>{

    const [question,setQuestion]=useState(0);
    const [showButton,setShowButton]=useState(0);
    const [score,setScore]=useState(0);
    const [correctOption,setCorrectOption]=useState(data[question].correctOptionId);
    const [currentOptionSelected,setCurrentOptionSelected]=useState(null);
    const [btnDisabled,setBtnDisabled]=useState(false); //if user can select options 
    const [showModal,setShowModal]=useState(false);
    const validation=(id)=>{
            setBtnDisabled(true);
            setCurrentOptionSelected(id)
            //validating correct option
            if(id==correctOption)
                {
                    setScore(score+1);
                    console.log("You guessed it")
                }
            setShowButton(true);
        }

    const nextQuestion=()=>{
        if(data[question].id==data.length-1)
            {
                //last question
                setShowModal(true);
                
            }
        else{
            setQuestion(question+1);
            setCorrectOption(data[question+1].correctOptionId); 
            setCurrentOptionSelected(null);
            setShowButton(false);
            setBtnDisabled(false)
            //is option disabled =true
        }
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
                                        validation(option.optionId) //answer validation
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
                        {renderButton()}
                        {showModal &&
                              <Modal visible={true}>
                                <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#142850"}}>
                                    <View style={{width:350,height:250,backgroundColor:"#fff",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                                        <Text style={{fontSize:25,fontWeight:"bold",color:"#000"}}>
                                            {score > 4 ? "Congratulations!" : "Better luck next time"}
                                        </Text>
                                        <Text style={{
                                            fontSize:30,
                                            marginVertical:25,
                                            color: score>4 ? "#10D610" : "red"
                                            
                                            }}>{score} / {data.length}</Text>
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
                </View>
        )
    }

    const renderButton=()=>{
        if(showButton)
        {
            return(
                <View style={{ justifyContent:"center",alignItems:"center",marginTop:80 }}>
                    <TouchableOpacity onPress={()=>{
                        nextQuestion();
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
        <View>
            {renderQuestion(question)}
        </View>
    )
}

const styles=StyleSheet.create({
    questionTitleContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    questionCountry:{
        fontWeight:"700",
        color:"#fff"
    },
    questionContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        marginTop:20,
        marginBottom:40
    },
})

export default Flags;