import React from "react";
import OneColumnLayout from "../layouts/oneColumnLayout";

const SuccessOrFailureMessage = ({icon, message}) => {
    return(
        <OneColumnLayout>
        <div className="dc-success-failure-container">
            {icon}
            <p>{message}</p>
        </div>
            
        </OneColumnLayout>
    );
};

export default SuccessOrFailureMessage;