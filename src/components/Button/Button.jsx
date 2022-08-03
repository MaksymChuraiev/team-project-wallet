// import { useNavigate   } from 'react-router-dom';
import { ButtonStyles } from './Button.styled';

const Button = (props) => {
    
    // const navigate = useNavigate();
    // const onClick = () => {
    //     navigate('/login')
    // }
    
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
            
            {/* <ButtonStyles
                type={props.buttonType}
                onClick={props.onClick}
                color='#4A56E2'
                bgColor='#ffffff'
                // border='solid'
                borderColor='#4A56E2'
            >
                {props.login}</ButtonStyles> */}
        </div>
    )
}

export default Button;