import React, { useEffect, useState } from 'react'

import Container from '../../components/ContainerPage'
import Content from '../../components/Content'
import Header from '../../components/Header'

const Home = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);

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
        <Header fixed={isMenuFixed && true}/>
        <Content fixed={isMenuFixed && true}>
            <h1>
                Olá
            </h1>
        </Content>

    </Container>
  )
}

export default Home
