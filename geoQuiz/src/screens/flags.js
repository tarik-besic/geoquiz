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

    const validateAnswer=(id)=>{
        //setting correct option
        setCorrectOption(data[question].correctOptionId);

        //validating correct option
        if(id==correctOption)
            {
                setScore(score + 1 );
                setQuestion(question+1)
                setShowButton(true);
            }
        else
            console.log("Nisi pogodio drzavu");
    }

    const nextQuestion=()=>{
        if(data[question]==data.length-1)
            {
                //last question
                console.log("NEMA VISE PITANJA")
            }
        else{
            setCorrectOption(null);
            setCurrentOptionSelected(null);
            //is option disabled =true
        }

    }


    const renderQuestion=(id)=>{
        return(
            <View>
                <Text>
                    Guess the Country
                </Text>

                <View >
                    <Text >
                        {data[id].question}
                    </Text>
                </View>
                <Button title="Gumb" onPress={()=>{setQuestion(question+1)}}/>
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                    {data[id].options.map(option=>{
                        return(
                            <TouchableOpacity 
                            key={option.optionId}
                            onPress={()=>{
                            validateAnswer(option.optionId)
                            console.log("validiram:"+option.optionId)
                            }}
                            style={{
                                marginVertical:5,
                                borderWidth:5,
                                borderColor: (currentOptionSelected==correctOption) ? "green" : "red"
                            }}
                            >

                                {
                                    // if(data[id].correctOptionId==option.optionId)
                                        

                                }
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
                    <TouchableOpacity onPress={nextQuestion} style={{backgroundColor:"#c4c4c4"}}>
                    <Text>Dugme</Text>
                    </TouchableOpacity>
                </View>
            )
        }
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