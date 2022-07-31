
import { ButtonStyles } from './Button.styled';

const ButtonGroup = () => {

    return (
        <div>
            <ButtonStyles
                type="submit"
                color='#fff'
                bgColor='#24CCA7'
                border='none'
            >
                REGISTER</ButtonStyles>
            <ButtonStyles
                type="button"
                color='#4A56E2'
                bgColor='#ffffff'
                // border='solid'
                borderColor='#4A56E2'
            >
                LOG IN</ButtonStyles>
        </div>
    )
}

export default ButtonGroup;