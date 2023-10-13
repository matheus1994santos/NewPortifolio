import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import Container from '../../components/ContainerPage'
import Content from '../../components/Content'
import Header from '../../components/Header'

import WaterImg from '../../assets/img/water.jpg'
import PendulumImg from '../../assets/img/Pendulum.jpg'

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
    <Container gap={30}>
      <Container Url={WaterImg}>
        <Header fixed={isMenuFixed && true} bg={theme.colors.background}/>
        <Content fixed={isMenuFixed && true}>
            
        </Content>
      </Container>
      <Container>
        <Content Url={PendulumImg} fixed={isMenuFixed && true}>
            
        </Content>
      </Container>
    </Container>
  )
}

export default Home
