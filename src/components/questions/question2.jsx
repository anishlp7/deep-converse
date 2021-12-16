import { Fragment } from "react/cjs/react.production.min"
import { handleButtonClick } from "../../utils/handleButtonClick";
import Button from "../button";
import DCQuestion from "../dcQuestions";

const QuestionTwo = ({setQuestionNumber, setClickedQuestions}) => {
    return (
        <Fragment>
        <p className="dc-question-title">
              Fix an installed Android app that isn't working
            </p>

            <p className="dc-question-note">
            Important: Settings can vary by phone. For more info, 
              <span className="dc-imp-text-clr"> contact your device manufacturer.</span>
            </p>

            <ol className="dc-unorderedStyle">
              <li>On most phones, press your phone's Power button for about 30 seconds or until your phone restarts.</li>
              <li>You might need to tap Restart </li>
            </ol>

            

            <DCQuestion question={`Press "Continue" once you have restarted your phone`} />

            <div className="dc-buttons">
              <Button btnName="Continue"  handleClick={() => handleButtonClick('Three', setQuestionNumber, setClickedQuestions)} />
            </div>
        </Fragment>
    )
};

export default QuestionTwo;