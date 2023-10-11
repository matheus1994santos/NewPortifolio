import React, { useEffect, useState } from 'react'

import Container from '../../components/ContainerPage'
import Content from '../../components/Content'
import Header from '../../components/Header'

import WaterImg from '../../assets/img/water.jpg'
import { useTheme } from 'styled-components'

const Home = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsMenuFixed(true);
      } else {
        setIsMenuFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Container>
      <Container Url={WaterImg}>
        <Header fixed={isMenuFixed && true} bg={theme.colors.background}/>
        <Content fixed={isMenuFixed && true}>
            <h1>
                Olá
            </h1>
        </Content>
      </Container>
    </Container>
  )
}

export default Home
