import React, { useState } from "react";
import { Button, StyleSheet, View , Text, Image, TouchableOpacity} from "react-native";

//data
import data from "../../quizData/flag-data";

//images
import correctCircle from "../../assets/images/circleC.png"
import wrongCircle from "../../assets/images/circleW.png"

const Flags=()=>{

    const [question,setQuestion]=useState(0);
    const [showButton,setShowButton]=useState(0);
    const [score,setScore]=useState(0);
    const [correctOption,setCorrectOption]=useState(null);
    const [currentOptionSelected,setCurrentOptionSelected]=useState(null);
    const [btnDisabled,setBtnDisabled]=useState(false); //if user can select options 

    const validation=(id)=>{
            setBtnDisabled(true);
            setCorrectOption(data[question].correctOptionId)
            setCurrentOptionSelected(id)
            //validating correct option
            if(id==correctOption)
                {
                    setScore(score+1);
                    setShowButton(true);
                    console.log("BRAVOOOOOOOOOOO")
                }
            else
                {
                    setShowButton(true);
                }
        }

    const nextQuestion=()=>{
        if(data[question].id==data.length-1)
            {
                //last question
                console.log("NEMA VISE PITANJA")
                return null
            }
        else{
            setQuestion(question+1);
            setCorrectOption(null); 
            setCurrentOptionSelected(null);
            setShowButton(false);
            setBtnDisabled(false)
            //is option disabled =true
        }
    }
    const renderQuestion=(id)=>{
            console.log("renderan"+id);
            let displayImg;
        return(
            <View >
                <Text style={{textAlign:"center", fontSize:30, marginBottom:30}}>
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
                                borderColor: (option.optionId==correctOption) ? "#49FF00" : option.optionId==currentOptionSelected ? "#D72323" : 0
                            }}
                            >
                                <Image source={option.imgUrl} style={{width: 160, height:80}} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {renderButton()}
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