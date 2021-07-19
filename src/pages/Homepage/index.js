import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Flex, Wrapper, Paper, Topics} from './styles'
import Navbar from '../../components/Navbar'
import Save from '../../assets/icons/save.png'
import FilledSaved from '../../assets/icons/filled-save.png'

const Homepage = ({match}) => {
    const {params: {topic} } = match
    const [data, setData] = useState([]);
    const [categoryList, setCategoryList ] = useState([]);
    const [isLoading, setIsLoading]= useState(true);

    const changeTopic = (topic) => {
        window.location.href = `/${topic}`
    }
    const handleOpen = (url) => {
        window.location.href = url
    }

    const fetchNews = async () => {
        const res = await axios.get('https://cors-anywhere.herokuapp.com/https://today.line.me/id/portaljson')
        let items = res.data
        setCategoryList(items.result.categoryList);
        setData(items)
        setIsLoading(false)
    }
    const handleTitle = (text) => {
        if(text.length > 90){
            return text.substring(0, 90) + '...'
        }
        return text
    }
    const [list, setList] = useState([])
    const handleSave = (e, id, title, publisher, image, url) => {
        e.stopPropagation()
        let listSaved = [];
        let localData = localStorage.getItem('saved_news');
        const data  = {
            id: id,
            title: title,
            publisher: publisher,
            image: image,
            url: url,
        }
        listSaved.push(data);    
      
        if(localData !== null && JSON.parse(localData).length!==0){
            const isAlreadySaved = JSON.parse(localData).some(x => x.id === id)   
            listSaved.push.apply(listSaved, JSON.parse(localData));    
            if(isAlreadySaved){
               listSaved = listSaved.filter((el)=>el.id!==id);
            }
          
        }
        localStorage.setItem('saved_news', JSON.stringify(listSaved))
        setList(listSaved)
       
    }
    
    const getLocal = () => {
        let listSaved = [];
        let localData = localStorage.getItem('saved_news');
        if(localData !== null && JSON.parse(localData).length!==0){
            listSaved.push.apply(listSaved, JSON.parse(localData));      
        }  
        setList(listSaved)
    }
    const handlePic = (id) => {
        const found = list.some(x => x.id === id)
        if(!found){
            return Save
        }
        return FilledSaved   
    }

    useEffect(() => {
        fetchNews()
        getLocal()
    }, [])

    return(
        <div>
            <Navbar />
            {isLoading ? 
                <Flex direction="row" justify="center" alignItems="center">
                    <img src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif" alt="loading_gif" style={{marginTop: '5em'}} />
                </Flex>
            :
               
            <Wrapper>
                <Flex direction="row" justify="space-around" wrap="wrap" className="topic_wrap">
                    {categoryList.map((items, i) => (
                        <Topics key={i} onClick={() => changeTopic(items.name.toLowerCase())}>
                            {items.name}
                        </Topics>
                    ))}
                </Flex>
                    {data && data.result && data.result.categories.filter(items => items.name.toLowerCase() === topic).map((item, i) => (
                        <div key={i}>
                            {item.templates.filter(items => items.title && items.sections[0].articles.length !== 0).map((headline,j) => (
                                <div key={j}>
                                    <Flex direction="row" justify="flex-start" wrap="wrap">
                                        <h2 className="section">{headline.title}</h2>
                                    </Flex>
                                    <Flex direction="row" justify="space-around" wrap="wrap">
                                        {headline.sections[0].articles.map((news) => (
                                            <Paper key={news.id} onClick={() => handleOpen(news.url.url)}>
                                                <img src={`https://obs.line-scdn.net/${news.thumbnail.hash}`}  alt="thumbnail"/>
                                                <div style={{marginLeft: '0.5em'}}>
                                                    <p className="title">{handleTitle(news.title)}</p>
                                                    <Flex direction="row" justify="space-between">
                                                        <p className="publisher">{news.publisher}</p>
                                                        <img 
                                                            alt="icon-bookmark"
                                                            src={handlePic(news.id)} 
                                                            className="icon" 
                                                            onClick={(e) => handleSave(e, news.id, news.title, news.publisher, news.thumbnail.hash, news.url.url)} 
                                                        />
                                                    </Flex>
                                                </div>
                                            </Paper>
                                        ))}
                                    </Flex>
                                </div>
                            ))}
                        </div> 
                    ))}
            </Wrapper>
            }
        </div>
    )
}

export default Homepage