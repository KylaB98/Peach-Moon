import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { sliderItems } from '../data';
import { mobile } from "../Responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    padding-top: 60px;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    weight: 50px;
    font-size: 50px;
    height: 0px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw)
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
    padding-top: 75px;
`;

const InfoContiner = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
    text-shadow: 2px 2px 2px #404040;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: white;
    box-shadow: 2px 2px 2px #404040;
    border: none;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <FontAwesomeIcon icon={solid ('caret-left')} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContiner>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button>Shop Now</Button>
                </InfoContiner>
                </Slide>
            ))};
            <Slide bg="#DA9E75">
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1548357194-9e1aace4e94d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1614&q=80"/>
            </ImgContainer>
            <InfoContiner>
                <Title>SALE</Title>
                <Description>Don't miss these deals!</Description>
                <Button>Shop Now</Button>
            </InfoContiner>
            </Slide>
            <Slide bg="#DA9E75">
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1548357194-9e1aace4e94d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1614&q=80"/>
            </ImgContainer>
            <InfoContiner>
                <Title>Best Sellers</Title>
                <Description>Top selling items</Description>
                <Button>Shop Now</Button>
            </InfoContiner>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <FontAwesomeIcon icon={solid ('caret-right')} />
        </Arrow>
    </Container>
  )
}

export default Slider