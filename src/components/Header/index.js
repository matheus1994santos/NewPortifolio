import React, {useState} from 'react'
import MenuHeader from '../MenuHeader';
import ThemedButtons from '../ThemedButtons';

import { 
  StyledHamburgerButton, 
  StyledHeader, 
  StyledHeaderContainer, 
  StyledLogo, 
  StyledMenu 
} from './styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledLogo>
          <h3>Matheus Noronha</h3>
          <h6>Web developer</h6>
        </StyledLogo>
        <StyledHamburgerButton onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </StyledHamburgerButton>
        {/* <ThemedButtons variant='hamburger' onClick={toggleMenu}/> */}
        <MenuHeader Open={menuOpen}/>
      </StyledHeader>
    </StyledHeaderContainer>
  )
}

export default Header

// sGTzRg5QCYTvdTrgngmexMRAdzyptEB5KXIEyhgc