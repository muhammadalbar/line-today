import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    height: 100%;
`

export const Wrapper = styled.div`
    margin-top: 1em;
    width: 100%;
    // padding-left: 3em;
    // padding-right: 3em;
    
    .section{
        margin: 2em 2em;
    }
    @media (max-width: 414px){
        .section{
            margin: 15px 5px;
        }
    }

`

export const Paper = styled.div`
    width: 360px;
    height: 315px;
    margin-top: 1em;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 10px;

    .section{
        margin: 2em 2em;
    }
    img{
        width: 100%;
        height: 185px;
    }
    .title{
        font-size: 18px;
        font-weight: 600;
        max-height: 45px;
    }
    .publisher{
        font-size: 15px;
        color: #777777;

    }
    .icon{
        width: 2em;
        height: 2em;
        margin-right: 1em;
    }
    :hover{
        cursor: pointer;
        box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.3);
        transition: 0.5s;
    }

    @media (max-width: 414px){
        width: 200px;
        height: 226px;
        .section{
            margin: 0 15px;
        }
        img{
            height: 104px;
        }
        .title{
            font-size: 15px;
            max-height: 55px;
        }
        .publisher{
            font-size: 12px;
        }
        .icon{
            width: 1em;
            height: 1em;
            margin-top: 10px;
        }
    }

    @media (max-width: 375px){
        width: 180px;
        height: 230px;
        .section{
            margin: 0 15px;
        }
        img{
            height: 104px;
        }
        .title{
            font-size: 15px;
        }
        .publisher{
            font-size: 12px;
        }
        .icon{
            width: 1em;
            height: 1em;
            margin-top: 10px;
        }
    }
`

export const Topics = styled.a`
    font-weight: 400;
    font-size: 18px;
    background-color: rgba(242, 242, 242, 1);
    padding: 8px 16px;
    border-radius: 20px;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 1em;
    cursor: pointer;
    text-decoration: none;
    

    @media(max-width: 414px){
        font-size: 15px;
    }
`