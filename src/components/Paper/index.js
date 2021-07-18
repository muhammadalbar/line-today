import React from 'react'
import {Flex, Wrapper} from './styles'

const Paper = ({image, title, publisher, icon, handleOpen, handleDelete, handleIcon}) => {

    return(
        <Wrapper>
            <div onClick={handleOpen}>
                <img src={`https://obs.line-scdn.net/${image}`} />
                <div style={{marginLeft: '0.5em'}}>
                    <p className="title">{title}</p>
                    <Flex direction="row" justify="space-between">
                        <p className="publisher">{publisher}</p>
                        <img 
                            src={icon} 
                            className="icon" 
                            onClick={handleIcon} 
                        />
                    </Flex>
                </div>
            </div>
            
        </Wrapper>
    )
}

export default Paper