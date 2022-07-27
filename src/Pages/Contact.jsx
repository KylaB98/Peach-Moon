import React from 'react';
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Container = styled.div`
    
`;

const Image = styled.img`

`;

const Wrapper = styled.div`
    background-color: coral;
`;

const Title = styled.h1`
    text-align: center;
    padding-top: 60px;
    font-size: 100px;
`;

const ContactContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding 40px;
    align-items: center;
    justify-content: center;
    font-size: 25px;
`;


const AInput = styled.input`
    height: 80%;
    width: 50%;
    margin: 20px;
    padding: 18px;
    font-size: 18px;

`;

const EInput = styled.input`
    height: 80%;
    width: 50%;
    margin: 20px;
    padding:18px;
    font-size: 18px;

`;

const Input = styled.input`
    height: 200px;
    width: 700px;
    margin: 20px;
    font-size: 18px;

`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`;

const Contact = () => {
  return (
    <Container>
        <NavBar />
        <Wrapper>
            <Title>Contact Us!</Title>
                <ContactContainer>
                    Name
                    <AInput />
                    Email Address
                    <EInput />
                    Question/Comment
                    <Input />
                    <Button> Submit </Button>
                </ContactContainer>
                <Footer />
        </Wrapper>

    </Container>
  )
}

export default Contact