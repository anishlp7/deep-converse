import { Fragment } from "react/cjs/react.production.min";
import { handleButtonClick } from "../utils/handleButtonClick";
import Button from "./button";
import DCQuestion from "./dcQuestions";

const QuestionUI = ({ setQuestionNumber, setClickedQuestions, question }) => {
  return (
    <Fragment>
      <p className="dc-question-title">{question.questionTitle}</p>
      <p
        className={`dc-question-subtitle ${
          question.questionSubTitle ? "" : "hide"
        }`}
      >
        {question.questionSubTitle}
      </p>

      <p
        className={`${
          question.questionHeadingSpanText
            ? "dc-question-note "
            : "dc-question-subHeading "
        }  ${question.questionHeading ? "" : "hide"}`}
      >
        {question.questionHeading}
        <span className="dc-imp-text-clr">
          {question.questionHeadingSpanText}
        </span>
      </p>

      <question.listType className="dc-listStyle">
        {question.lists.map((list, i) => {
          return <li key={i++}>{list.value}</li>;
        })}
      </question.listType>

      <p className={`dc-question-note  ${question.noteMainText ? "" : "hide"}`}>
        {question.noteMainText}
        <span className="dc-imp-text-clr">{question.noteSpantext}</span>
      </p>

      <DCQuestion question={question.mainQuestion} />

      <div className="dc-buttons">
        {question.buttons.map((btn, i) => {
          return (
            <Button
              btnName={btn.btnName}
              handleClick={() =>
                handleButtonClick(
                  btn.btnValue,
                  setQuestionNumber,
                  setClickedQuestions
                )
              }
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default QuestionUI;
