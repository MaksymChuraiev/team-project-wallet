import { useNavigate   } from 'react-router-dom';
import { ButtonStyles } from './Button.styled';

const ButtonGroup = (props) => {
    const navigate = useNavigate ();
    
    return (
        <div>
            <ButtonStyles
                type="submit"
                color='#fff'
                bgColor='#24CCA7'
                border='none'
            >
                {props.register} </ButtonStyles>
            
            <ButtonStyles
                // to="/registration"
                type="button"
                onClick={() => {navigate('/login')}}
                color='#4A56E2'
                bgColor='#ffffff'
                // border='solid'
                borderColor='#4A56E2'
            >
                {props.login}</ButtonStyles>
        </div>
    )
}

export default ButtonGroup;