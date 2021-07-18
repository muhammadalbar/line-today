import React, { useEffect, useState } from 'react'
import {Flex, Wrapper} from './styles'
import Navbar from '../../components/Navbar'
import Paper from '../../components/Paper'
import Modal from '../../components/Modal'
import DeleteIcon from '../../assets/icons/trash.png'

const Bookmark = () => {
    const [open, setOpen] = useState(false)
    const handleModal = (e) => {
        e.stopPropagation()
        setOpen(true)
    }
    const [list, setList] = useState([])
    const data = localStorage.getItem('saved_news')
    const newsList = JSON.parse(data)
    const handleOpen = (url) => {
        window.location.href = url
    }
    const handleDelete = (e, id) => {
        e.stopPropagation()
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
        localStorage.setItem('saved_news', JSON.stringify(newList))
        setOpen(false)
    }
    console.log(JSON.parse(data))
    const getLocal = () => {
        if(localStorage.getItem('saved_news') === null){
            localStorage.setItem('saved_news', JSON.stringify([]))
        }
        let newsLocal = JSON.parse(localStorage.getItem('saved_news'))
        setList(newsLocal)
    }
    
    useEffect(() => {
        getLocal()
    }, [])
    return(
        <Wrapper>
            <Navbar />
            <Flex direction="row" justify="space-around" wrap="wrap">
                {newsList.map((items, i) => (
                    <div>
                        <Paper 
                            title={items.title}
                            publisher={items.publisher}
                            image={items.image}
                            icon={DeleteIcon}
                            handleOpen={() => handleOpen(items.url)}
                            // handleIcon={(e) => handleDelete(e, items.id)}
                            handleIcon={handleModal}
                        />
                        {open ? 
                            <Modal 
                                handleClose={() => setOpen(false)} 
                                handleDelete={(e) => handleDelete(e, items.id)}
                            />
                            :
                            null
                        }
                    </div>
                    
                ))}
            </Flex>
            
        </Wrapper>
    )
}

export default Bookmark