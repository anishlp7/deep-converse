import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/responsiveness.scss";
import "./styles/commonStyle.scss";
import { AiFillWarning } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import SuccessOrFailureMessage from "./components/successOrfailure";
import QuestionOne from "./components/questions/question1";
import TwoColumnLayout from "./layouts/twoColumnLayout";
import QuestionTwo from "./components/questions/question2";
import QuestionThree from "./components/questions/question3";
import QuestionFour from "./components/questions/question4";
import StoreUserDetails from "./components/storeUserDetails";

function App() {
  const [isInitialPage, setIsInitialPage] = useState(true);
  const [questionNumber, setQuestionNumber] = useState('One');
  const [ClickedQuestions, setClickedQuestions] = useState([]);

  useEffect(() => {
      if(questionNumber === 'One' || questionNumber === 'Success' || questionNumber === 'Failure'){
        setIsInitialPage(true);
      } else {
        setIsInitialPage(false);
      }
  }, [questionNumber])

  const handleStartOver = () => {
    setQuestionNumber('One');
    setIsInitialPage(true);
    setClickedQuestions([]);
  }

  const handleBackBtn = () => {
    ClickedQuestions.pop();
    const currentValue = ClickedQuestions[ClickedQuestions.length-1];
    if(currentValue === undefined){
      setQuestionNumber('One');
      setIsInitialPage(true);
    } else {
      setQuestionNumber(currentValue);
    }
  }
  return (
    <div className="App">
      <Header isInitialPage={isInitialPage} onHandleClick={handleStartOver} onHandleBackBtn={handleBackBtn} />
      {(() => {
        switch (questionNumber) {
          case 'One':
            return (
              <TwoColumnLayout
                img="androidLogo.png"
                componentChild={<QuestionOne setQuestionNumber={setQuestionNumber} setClickedQuestions={setClickedQuestions} />}
              />
            );
          case 'Two':
            return (
              <TwoColumnLayout
                img="question2.jpg"
                componentChild={<QuestionTwo setQuestionNumber={setQuestionNumber} setClickedQuestions={setClickedQuestions} />}
              />
            );
          case 'Three':
            return (
              <TwoColumnLayout
                img="question3.jpg"
                componentChild={<QuestionThree setQuestionNumber={setQuestionNumber} setClickedQuestions={setClickedQuestions} />}
              />
            );
          case 'Four':
            return (
              <TwoColumnLayout
                img="question2.jpg"
                componentChild={<QuestionFour setQuestionNumber={setQuestionNumber} setClickedQuestions={setClickedQuestions} />}
              />
            );
          case 'Success':
            return (
              <SuccessOrFailureMessage icon={<TiTick />} message={"Glad we were able to walk you through updating your app"} />
            );
          case 'storeUserDetails':
            return(
              <StoreUserDetails setQuestionNumber={setQuestionNumber}  />
            )
          case 'Failure':
            return(
              <SuccessOrFailureMessage icon={<AiFillWarning />} message={"Sorry for the inconvenience! At this stage, you should visit an Google store to get your issue resolved. Your case number is You can find the location closest to you on the Google Store Locator."} />
            )
          default:
            return null;
        }
      })()}
      <Footer />
    </div>
  );
}

export default App;
