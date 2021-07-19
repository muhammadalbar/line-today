import React from 'react'
import {Flex, Wrapper} from './styles'
import { Link } from "react-router-dom"
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return(
        <>
            <Wrapper>
                <Flex direction="row" justify="space-around" alignItems="center">
                    <Link to="/top">
                        <img src={Logo} alt="line-today-logo" />
                    </Link>
                    <Link to="/bookmark">Bookmarks</Link>
                </Flex>
            </Wrapper>
        </>
    )
}

export default Navbar