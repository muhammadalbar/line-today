import React from 'react'
import {Wrapper} from './styles'

const Button = (props) => {
    return(
        <Wrapper>
            {props.text}
        </Wrapper>
    )

}

export default Button