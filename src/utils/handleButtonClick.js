export const handleButtonClick = (val, setValue, setClickedQuestions) => {
   setTimeout(() => {
    setValue(val);
    setClickedQuestions(prevState => [...prevState, val]);
   }, 2000) 
}