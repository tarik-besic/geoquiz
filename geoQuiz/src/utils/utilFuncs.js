import monumentData from "../../quizData/monument-data";
import flagData from "../../quizData/flag-data";
import populationData from '../../quizData/population';

const validateAnswer=(id,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton)=>{
    setBtnDisabled(true);
    setCurrentOptionSelected(id);
    if(id==correctOption)
    {
        setScore(score+1);   
        console.log("tacno")
    }
    setShowButton(true);
}
const nextQuestion=(question,setQuestion,setCorrectOption,setCurrentOptionSelected,setShowButton,setBtnDisabled,setShowModal,gamemode)=>{
    //quizLength
    console.log("quesst:",question)
    let lastQuestion=gamemode=="flags" ? flagData.length-1 : gamemode=="monuments" ? monumentData.questions.length-1 : populationData.questions.length-1;
     console.log('LastQ:',lastQuestion)
    if(question==lastQuestion)
    {
        //last question
        setShowModal(true);
    }
else{
    setQuestion(question+1);
    if(gamemode=="monuments")
        setCorrectOption(monumentData.questions[question+1].correctOptionId)
    else
        if(gamemode=="flags")
            setCorrectOption(flagData[question+1].correctOptionId)
        else
            setCorrectOption(()=>{
                populationData[question].population>populationData[question+1].population ? populationData[question].population : populationData[question+1].population
            })

    setCurrentOptionSelected(null);
    setShowButton(false);
    setBtnDisabled(false)
}
}

export {
    validateAnswer,
    nextQuestion  
} 