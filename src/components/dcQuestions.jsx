import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';


const DCQuestion = (props) => {
    return(
        <div className="dc-style-border-question-item">
        <BsFillQuestionCircleFill />
        <span className="dc-imp-text-clr dc-imp-styleText-align">{props.question}</span>
    </div>
    )
};

export default DCQuestion;