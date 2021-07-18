import React from 'react'
import {Flex, Wrapper} from './styles'

const Modal = ({handleDelete, handleClose}) => {
    return(
        <Wrapper>
            <div className="content">
                <h2>Are you sure want to remove this news from reading list ?</h2>
                <Flex direction="row" justify="flex-end">
                    <button onClick={handleClose}>No</button>
                    <button className="yes_btn" onClick={handleDelete}>Yes</button>
                </Flex>
            </div>
        </Wrapper>
    )
}

export default Modal