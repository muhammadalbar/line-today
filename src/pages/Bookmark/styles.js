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
    margin-bottom: 3em;
    width: 100%;
    // padding-left: 3em;
    // padding-right: 3em;

    .topic_wrap{
        // margin-left: 3em;
        // margin-right: 3em;
    }

`

export const Paper = styled.div`
    width: 360px;
    height: 315px;
    margin-top: 1em;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 10px;
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
`