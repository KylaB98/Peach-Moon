import React from 'react';
import NavBar from '../Components/NavBar';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import PopProducts from '../Components/PopProducts';
import Footer from '../Components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  color: #190967;
`;

const Home = () => {
  return (
    <div>
        <NavBar />
        <Slider />
        <Categories />
        <PopProducts />
        <Footer />
    </div>
  )
}

export default Home