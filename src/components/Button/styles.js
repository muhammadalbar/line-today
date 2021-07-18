import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
    background: transparent;
    width: 80px;
    height: 40px;
    background: white;
    color: black;
    border: 0.5px solid black;
    border-radius: 5px;
    // cursor: pointer;
    :hover{

    }

    ${props => props.primary && css`
        background: palevioletred;
        color: white;
        `};
`