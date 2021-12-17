export const handleButtonClick = (val, setValue, setClickedQuestions, ClickedQuestions) => {
   setTimeout(() => {
    setValue(val);
    setClickedQuestions(prevState => [...prevState, val]);
    console.log("Setting the question value", val)
    localStorage.setItem('lastQuestion',val);
    localStorage.setItem('clickedQuestions', ClickedQuestions)
   }, 2000) 
}