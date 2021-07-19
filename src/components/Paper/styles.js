import styled from 'styled-components'

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
    width: 360px;
    height: 315px;
    margin-top: 1em;
    margin-left: 3em;
    margin-right: 3em;
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

    @media (max-width: 1280px){
        margin-left: 2em;
        margin-right: 2em;
    }
    @media (max-width: 768px){
        margin-left: 0;
        margin-right: 0;
    }

    @media (max-width: 414px){
        width: 200px;
        height: 226px;
        margin-top: 1em;
        margin-left: 0;
        margin-right: 0;
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