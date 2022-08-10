
import { ButtonStyles } from './Button.styled';

const Button = (props) => {
    

    return (
        <div>
            <ButtonStyles
                type={props.type}
                color={props.color}
                bgColor={props.bgColor}
                border={props.border}
                onClick={props.onClick}
                disabled={props.password !== props.confirmPassword}
                borderColor={props.borderColor}
            >
                {props.buttonTitle} </ButtonStyles>
        </div>
    )
}

export default Button;