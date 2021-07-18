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
    width: 100%;
    height: 110px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img{
        width: 7em;
    }
    a{
        font-size: 24px;
        font-weight: 600;
        text-decoration: none;
        color: #000000;
    }

    @media (max-width: 414px){
        img{
            width: 5em;
        }
        a{
            font-size: 20px;
        }
    }
`
