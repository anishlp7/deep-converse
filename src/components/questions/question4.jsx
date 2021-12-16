import { Fragment } from "react/cjs/react.production.min"
import Button from "../button";
import DCQuestion from "../dcQuestions";
import { AiOutlineMenu, AiOutlineRight } from 'react-icons/ai';
import { handleButtonClick } from "../../utils/handleButtonClick";

const QuestionFour = ({setQuestionNumber, setClickedQuestions}) => {
    return (
        <Fragment>
        <p className="dc-question-title">
        Update the app
            </p>

            <ol className="dc-unorderedStyle">
              <li>On your phone, open the Google Play Store app <img src={require('../../assets/playstore.png')} alt="Play Store" height={14} /> .</li>
              <li>Tap Menu <AiOutlineMenu />  <AiOutlineRight /> <span>My apps & games.</span></li>
              <li>
              <p>Apps with available updates are labeled "Update."</p>
              <p>If an update is available, tap <span>Update.</span></p>
              <p>If more updates are available, tap <span>Update all.</span></p>
              </li>
            </ol>

            <DCQuestion question={`Were you able to update the app?`}/>

            <div className="dc-buttons">
              <Button btnName="Yes" handleClick={() => handleButtonClick('Success', setQuestionNumber, setClickedQuestions)} />
              <Button btnName="No" handleClick={() => handleButtonClick('storeUserDetails', setQuestionNumber, setClickedQuestions)} />
       
            </div>
        </Fragment>
    )
};

export default QuestionFour;