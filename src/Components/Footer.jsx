import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { mobile } from "../Responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font: 50px Allura;
    margin: 5px;
    color: #f4a261;
`;

const Description = styled.p`
    margin: 10px 0px;
`;

const Copyright = styled.p`
    margin: 10px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    margin-right: 15px;
    margin-left: 15px;
    cursor: pointer;
`;

const Link = styled.div`

`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Peach Moon</Logo>
            <Description>Peach Moon is a mystics and curiosities shop located in the heart of Atlanta, Georgia. We're brand new and ready to help you in your journey into the mysterious! Limited stock for the moment, but we do take requests for things you want to see in the future! Contact us and let us know what ou want ot see from us.</Description>
            <Copyright> &copy; PeachMoon.co 2022 </Copyright>
        </Left>
        <SocialContainer>
            <SocialIcon color="F4A261">
                <Link to={{pathname: "facebook.com"}} target="_blank">
                <FontAwesomeIcon icon={brands ('facebook')} />
                </Link>
            </SocialIcon>
            <SocialIcon color="F4A261">
                <a hfref="twitter.com">
                <FontAwesomeIcon icon={brands ('twitter')} />
                </a>
            </SocialIcon>
            <SocialIcon color="F4A261">
                <FontAwesomeIcon icon={brands ('instagram')} />
            </SocialIcon>
            <SocialIcon color="F4A261">
                <FontAwesomeIcon icon={brands ('pinterest')} />
            </SocialIcon>
        </SocialContainer>
        <Center>
            <Title> Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Tarot Cards</ListItem>
                <ListItem>Crystals</ListItem>
                <ListItem>Candles</ListItem>
                <ListItem>Incense</ListItem>
                <ListItem>Misc</ListItem>
                <ListItem>Order tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
                <ContactItem>
                    <FontAwesomeIcon icon={solid ('location-dot')} style={{marginRight:"10px"}} color="#F4A261"/> 123 Peachtree St, Atlanta, Ga 30301
                </ContactItem>
                <ContactItem>
                    <FontAwesomeIcon icon={solid ('phone')} style={{marginRight:"10px"}} color="#F4A261"/> +1 123 456 7890
                </ContactItem>
                <ContactItem>
                    <FontAwesomeIcon icon={regular ('envelope')} style={{marginRight:"10px"}} color="#F4A261"/> contact@peach-moon.co
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer