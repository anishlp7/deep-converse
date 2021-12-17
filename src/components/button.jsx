import React from 'react';
import { useState } from 'react/cjs/react.development';
import { BiLoaderAlt } from 'react-icons/bi';

const Button = ({btnName, handleClick}) => {
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    const handleBtnClick = () => {
        setIsBtnClicked(true);
        setTimeout(() => {
            setIsBtnClicked(false);
        },2000)
        return handleClick()
    }
    return(
        <button type="submit" className="dc-btnStyle" onClick={handleBtnClick}>
            {
                isBtnClicked ?
                <BiLoaderAlt className='dc-btn-loader' />
                :
                btnName
            }  
    </button>
    )
}

export default Button;