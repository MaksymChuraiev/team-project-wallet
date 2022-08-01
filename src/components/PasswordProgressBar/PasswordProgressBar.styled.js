import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyles = props =>
    css`
    background-color: ${props.bgColor}; 
    border: 2px solid ${props.bgColor};
    width: ${props.width};
    `

export const ProgressBar = styled.div`
    height: 4px;
    border-radius: 10px;

    ${dynamicStyles}
`;