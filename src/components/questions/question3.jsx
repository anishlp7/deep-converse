import { Fragment } from "react/cjs/react.production.min"
import { handleButtonClick } from "../../utils/handleButtonClick";
import Button from "../button";
import DCQuestion from "../dcQuestions";

const QuestionThree = ({setQuestionNumber, setClickedQuestions}) => {
    return (
        <Fragment>
        <p className="dc-question-title">
        Check for Android updates
            </p>

            <ul className="dc-unorderedStyle">
              <li>Open your phone's Settings app.</li>
              <li>Near the bottom, tap System and then Advanced and then System update.</li>
              <li>Depending on your phone, you might need to tap About phone or About tablet and then Software update.</li>
              <li>You'll find your update status. Follow any steps on the screen.</li>
            </ul>

            <DCQuestion question={`Press "Continue" when your phone is updated`} />

            <div className="dc-buttons">
              <Button btnName="Continue" handleClick={() => handleButtonClick('Four', setQuestionNumber, setClickedQuestions)}/>
       
            </div>
        </Fragment>
    )
};

export default QuestionThree;