import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { mobile } from "../Responsive";
import { Link } from 'react-router-dom';


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    font-weight: light;
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-right: 20px;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font: 80px Allura;
    margin: 5px;
    color: #f4a261;
    height: 80%;
    align-items: center;

`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 25px;
    margin-right: 20px;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 25px;
    cursor: pointer;
    margin-left: 25px;
    margin-right: 20px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <MenuItem>Shop</MenuItem>
            </Left>
            <Center>
                <Logo>Peach Moon</Logo>
            </Center>
            <Right>
                <MenuItem>Contact Us</MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={solid ('cart-shopping')} style={{color:"#F4A261", fontSize:25}} />
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
};

export default NavBar