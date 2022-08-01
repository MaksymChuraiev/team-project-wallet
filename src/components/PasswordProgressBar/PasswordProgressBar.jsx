import React from "react";
import {ProgressBar} from './PasswordProgressBar.styled'

const PasswordProgressBar = ({password}) => {
    // console.log(password);
    return (
        <div>
            {password < 6 && <ProgressBar bgColor="#D22B2B" width='25%'/>}
            {password >= 6 && password < 9 && <ProgressBar bgColor="#E97451" width='50%' />}
            {password > 8 && password <= 10 && <ProgressBar bgColor="#24CCA7" width='75%' />}
            {password > 10 && <ProgressBar bgColor="#24CCA7" width='100%' />}
            {password > 12 && alert("Your password is too long")}
        </div>
    )
}

export default PasswordProgressBar;