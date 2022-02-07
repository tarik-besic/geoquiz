//  shuffle array
const randomize = data => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
};

const shuffleData = (data) => {
    data=randomize(data);
    //shuffling options
    data = data.map(question => {
      return {...question, options: randomize(question.options)};
    });
    return data;
  };

const validateAnswer=(id,setBtnDisabled,setCurrentOptionSelected,correctOption,setScore,score,setShowButton)=>{
    setBtnDisabled(true);
    setCurrentOptionSelected(id);
    if(id==correctOption)
    {
        setScore(score+1);   
    }
    setShowButton(true);
}
const nextQuestion=(question,setQuestion,setCorrectOption,setCurrentOptionSelected,setShowButton,setBtnDisabled,setShowModal,nextQuestionCorrectOption,gamemode,lastQuestion)=>{
    if(question==lastQuestion)
    {
        //last question
        setShowModal(true);
    }
    else{
        setQuestion(question+1);
        if(gamemode=="monuments")
            setCorrectOption(nextQuestionCorrectOption)
        else
            if(gamemode=="flags")
                setCorrectOption(nextQuestionCorrectOption)
            else
                setCorrectOption(nextQuestionCorrectOption)
        setCurrentOptionSelected(null);
        setShowButton(false);
        setBtnDisabled(false);
    }
}


export {
    validateAnswer,
    nextQuestion,
    shuffleData
} 