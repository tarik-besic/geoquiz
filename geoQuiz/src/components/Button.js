import React from 'react';
import {View , Text, TouchableOpacity, Modal} from "react-native";
import {nextQuestion} from "../utils/utilFuncs";

const Button = ({data}) => {
  return (
            <View style={{ justifyContent:"center",alignItems:"center",marginTop:80 }}>
                <TouchableOpacity onPress={()=>{
                    nextQuestion(data.question,data.setQuestion,data.setCorrectOption,data.setCurrentOptionSelected,data.setShowButton,data.setBtnDisabled,data.setShowModal,data.gamemode);
                }} style={{backgroundColor:"#c4c4c4", width:256,height:75,borderRadius:20,alignItems:"center",justifyContent:"center",backgroundColor:"#0C7B93"}}>
                <Text style={{fontSize:20,color:"white"}}>Next question</Text>
                </TouchableOpacity>
            </View>
  )
};

export default Button;