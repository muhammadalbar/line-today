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
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    // opacity: 0;
    transition: all 0.3s ease-in-out;
    // pointer-events: none;

    .content{
        width: 400px;
        height: 200px;
        background: #fff;
        padding-left: 2em;
        padding-right: 2em;
        // transform: trasnlateY(-200px);
        // transition: all 0.3s ease-in-out;
    }

    button{
        width: 80px;
        height: 40px;
        background: white;
        color: black;
        border: 0.5px solid black;
        border-radius: 5px;
        margin-right: 1em;
        cursor: pointer;
        :hover{

        }
    }
    .yes_btn{
        background: #df4759;
        color: white;
        border: none;
    }
`