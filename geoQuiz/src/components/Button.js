import React from 'react';
import {View , Text, TouchableOpacity} from "react-native";
import {nextQuestion} from "../utils/utilFuncs";

const Button = ({data}) => {
  return (
            <View style={{
              justifyContent:"center",
              alignItems:"center",
              marginTop:25 }}>
                <TouchableOpacity onPress={()=>{
                    nextQuestion(data.question,data.setQuestion,data.setCorrectOption,data.setCurrentOptionSelected,data.setShowButton,data.setBtnDisabled,data.setShowModal,data.nextQuestionCorrectOption,data.gamemode,data.lastQuestion);
                }} style={{
                  backgroundColor:"#c4c4c4",
                  width:256,
                  height:75,
                  borderRadius:20,
                  alignItems:"center",
                  justifyContent:"center",
                  backgroundColor:"#222831"}}>
                <Text style={{
                  fontSize:30,
                  color:"#00ADB5",
                  fontWeight:"bold"
                  }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
  )
};

export default Button;