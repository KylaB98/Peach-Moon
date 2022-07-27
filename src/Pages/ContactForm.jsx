import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const HeaderContainer = styled.div`
    margin-top: 20px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

`;

const Wrapper = styled.div`
`;

const Title = styled.h1`
    color: #F4A261;
    font: 200px Allura;
    text-align: center;
    padding-top: 40px;
    font-size: 55px;
`;

const Form = styled.form`
    background-color: #F4A261;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding 10px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: light;
`;

const Label = styled.h2`
    padding: 0px;
    font-size: 25px;
    font-weight: light;
    text-align: center;
`;


const Input = styled.input`
    height: 20px;
    width: 700px;
    margin: 5px;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    border: #F4A261;

`;

const Textarea = styled.textarea`
    height: 200px;
    width: 710px;
    margin: 10px;
    font-size: 18px;
    border-radius: 10px;
    border: #F4A261;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
`;

const ContactForm = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
    const {name, email, message} = e.target.elements;
    let details = {
        name: name.value,
        email: email.value,
        message: message.value,
    };
    
    let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    };

  return (
    <Container>
        <NavBar />
    <Wrapper>
        <Title> Contact Us</Title>
    <Form onSubmit= {handleSubmit}>
        <div>
            <Label htmlFor= "name"> Name:</Label>
            <Input type="text" id="name" required />
        </div>
        <div>
            <Label htmlFor="email"> Email:</Label>
            <Input type="email" id="email" required />
        </div>
        <div>
            <Label htmlFor="message"> Message:</Label>
            <Textarea id="message" required />
        </div>
        <Button type="submit">{status}</Button>
    </Form>
    <Footer />
    </Wrapper>
    </Container>
  );
};

export default ContactForm;