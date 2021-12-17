import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/responsiveness.scss";
import "./styles/commonStyle.scss";
import SuccessOrFailureMessage from "./components/successOrfailure";
import TwoColumnLayout from "./layouts/twoColumnLayout";
import StoreUserDetails from "./components/storeUserDetails";
import { questionList } from "./data/questionsList";
import QuestionUI from "./components/questionUI";


function App() {
  const [isInitialPage, setIsInitialPage] = useState(true);
  const [questionNumber, setQuestionNumber] = useState("One");
  const [ClickedQuestions, setClickedQuestions] = useState([]);

  useEffect(() => {
    if (
      questionNumber === "One" ||
      questionNumber === "Success" ||
      questionNumber === "Failure"
    ) {
      setIsInitialPage(true);
    } else {
      setIsInitialPage(false);
    }
  }, [questionNumber]);

  const handleUIElements = () => {
    const questionNumberObj = questionList.find(
      (val) => val.questionId === questionNumber
    );
    if (questionNumberObj.questionId === "storeUserDetails") {
      return <StoreUserDetails setQuestionNumber={setQuestionNumber} />;
    } else if (
      questionNumberObj.questionId === "Success" ||
      questionNumberObj.questionId === "Failure"
    ) {
      return <SuccessOrFailureMessage
        icon={questionNumberObj.icon}
        message={questionNumberObj.message}
      />;
    } else {
      return (
        <TwoColumnLayout
          img={questionNumberObj.imagePath}
          componentChild={
            <QuestionUI
              setQuestionNumber={setQuestionNumber}
              setClickedQuestions={setClickedQuestions}
              question={questionNumberObj}
            />
          }
        />
      );
    }
  };

  useEffect(() => {
    if (!isInitialPage) {
      localStorage.setItem(
        "clickedQuestions",
        JSON.stringify(ClickedQuestions)
      );
    }
  }, [ClickedQuestions]);

  useEffect(() => {
    const lastSavedValue = localStorage.getItem("lastQuestion");
    const clickedQuestion = localStorage.getItem("clickedQuestions");
    if (clickedQuestion === null) {
      return null;
    } else {
      const parsedClickValue = JSON.parse(clickedQuestion);
      setClickedQuestions(parsedClickValue);
    }

    if (lastSavedValue) {
      setQuestionNumber(lastSavedValue);
    }
  }, []);

  const handleStartOver = () => {
    setQuestionNumber("One");
    setIsInitialPage(true);
    setClickedQuestions([]);
    localStorage.clear();
  };

  const handleBackBtn = () => {
    ClickedQuestions.pop();
    const currentValue = ClickedQuestions[ClickedQuestions.length - 1];
    if (currentValue === undefined) {
      setQuestionNumber("One");
      setIsInitialPage(true);
      localStorage.setItem("lastQuestion", "One");
      localStorage.setItem("clickedQuestions", JSON.stringify([]));
    } else {
      setQuestionNumber(currentValue);
      localStorage.setItem("lastQuestion", currentValue);
      localStorage.setItem(
        "clickedQuestions",
        JSON.stringify(ClickedQuestions)
      );
    }
  };
  return (
    <div className="App">
      <Header
        isInitialPage={isInitialPage}
        onHandleClick={handleStartOver}
        onHandleBackBtn={handleBackBtn}
      />
      {handleUIElements()}
      <Footer />
    </div>
  );
}

export default App;
