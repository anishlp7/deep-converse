import { Fragment } from "react/cjs/react.production.min"
import { handleButtonClick } from "../../utils/handleButtonClick";
import Button from "../button";
import DCQuestion from "../dcQuestions";

const QuestionOne = ({setQuestionNumber, setClickedQuestions}) => {
    return (
        <Fragment>
        <p className="dc-question-title">
              Fix an installed Android app that isn't working
            </p>
            <p className="dc-question-subtitle">Android Troubleshooting</p>

            <p className="dc-question-subHeading">
              Try the following steps if an app installed on your phone has any
              of these problems:
            </p>

            <ul className="dc-unorderedStyle">
              <li>Crashing</li>
              <li>Won't Open</li>
              <li>Won't Respond</li>
              <li>Isn't working properly</li>
            </ul>

            <p className="dc-question-note">
              Note: Some of these steps work only on Android 8.1 and up.
              <span className="dc-imp-text-clr">Learn how to check your Android version.</span>
            </p>

            <DCQuestion question="Is your Android phone responding to actions?" />

            <div className="dc-buttons">
              <Button btnName="Yes" handleClick={() => handleButtonClick('Three', setQuestionNumber, setClickedQuestions)} />
              <Button btnName="No" handleClick={() => handleButtonClick('Two', setQuestionNumber, setClickedQuestions)} />
       
            </div>
        </Fragment>
    )
};

export default QuestionOne;