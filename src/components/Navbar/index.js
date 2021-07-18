import React from 'react'
import {Flex, Wrapper} from './styles'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return(
        <>
            <Wrapper>
                <Flex direction="row" justify="space-around" alignItems="center">
                    <a href="/top">
                        <img src={Logo}/>
                    </a>
                    <a href="/bookmark">Bookmarks</a>
                </Flex>
            </Wrapper>
        </>
    )
}

export default Navbar