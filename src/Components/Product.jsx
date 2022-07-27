
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import axios from "axios";
import React, { useEffect, useState } from "react";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
    cursor: pointer;

`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    jusify-content: center;
    background-color: gray;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;

    &:hover{
        background-color: #190967;
        transform: scale (1.5),
    }
`;

const Product = ({item}) => {
    return (
      <Container>
          <Circle />
          <Image src={item.img}/>
          <Info>
              <Icon>
                  <FontAwesomeIcon icon={solid ('cart-shopping')} style={{color:"gray"}} />
              </Icon>
              <Icon>
                  <FontAwesomeIcon icon={solid ('magnifying-glass')} style={{color:"gray"}}/>
              </Icon>
              <Icon>
                  <FontAwesomeIcon icon={regular ('heart')} style={{color:"gray"}} />
              </Icon>
          </Info>
      </Container>
    )
   }
    
   export default Product
   
