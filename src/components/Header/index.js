import React, {useState} from 'react'
import { StyledHamburgerButton, StyledHeader, StyledHeaderContainer, StyledLogo, StyledMenu } from './styles'

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
        <StyledMenu isOpen={menuOpen}>
          <ul>
            <li>Início</li>
            <li>Projetos</li>
            <li>Sobre</li>
            <li>Contatos</li>
          </ul>
        </StyledMenu>
      </StyledHeader>
    </StyledHeaderContainer>
  )
}

export default Header

// sGTzRg5QCYTvdTrgngmexMRAdzyptEB5KXIEyhgc