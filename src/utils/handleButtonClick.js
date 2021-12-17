export const handleButtonClick = (val, setValue, setClickedQuestions) => {
   setTimeout(() => {
      if(val === "One" || val === "Success" || val === "Failure"){
         localStorage.clear();
      } else {
        localStorage.setItem('lastQuestion',val);
      }
    setValue(val);
    setClickedQuestions(prevState => [...prevState, val]);
   }, 2000) 
}