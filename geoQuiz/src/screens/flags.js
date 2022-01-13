import React, { useState } from "react";
import { Button, StyleSheet, View , Text, Image, TouchableOpacity} from "react-native";

//data
import data from "../../quizData/flag-data";


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
        return(
            <View>
                <Text>
                    Guess the Country
                </Text>

                <View >
                    <Text >
                        {console.log("TRL:"+question)}
                        {data[question].question}
                    </Text>
                    
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
                                borderColor: (option.optionId==correctOption) ? "green" : option.optionId==currentOptionSelected ? "red" : 0
                            }}
                            >
                                <Image source={option.imgUrl} style={{minHeight:105}} />
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
                <View>
                    <TouchableOpacity onPress={()=>{
                        nextQuestion();
                    }} style={{backgroundColor:"#c4c4c4"}}>
                    <Text>Dugme</Text>
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