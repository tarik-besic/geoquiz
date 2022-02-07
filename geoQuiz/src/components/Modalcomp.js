import React from 'react';
import {Text,TouchableOpacity,View,Modal} from 'react-native';

const ModalComp = ({data}) => {

        let min= data.gamemode=="monuments" ? 2 : 5;   //if gamemode is monments then min is 2 else the other 2 gamemodes have the same limit 5
        return(
            <Modal visible={true}>
                <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#142850"}}>
                    <View style={{width:350,height:250,backgroundColor:"#fff",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:25,fontWeight:"bold",color:"#000"}}>
                            { data.score>min ? "Congratulations!" : "Better luck next time"}
                        </Text>
                        <Text style={{
                            fontSize:30,
                            marginVertical:25,
                            color: data.score>min ? "#10D610" : "red"
                            }}>{data.score} / {data.length}</Text>
                    <TouchableOpacity 
                        onPress={()=>{
                            data.setRandomizeData(true);
                            data.navigation.navigate("Home",{gamemode:data.gamemode})
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
        )
}

export default ModalComp;