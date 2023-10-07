import {useState} from 'react'

import MenuHeader from '../MenuHeader';
import ThemedButtons from '../ThemedButtons';

import { 
  StyledHeader, 
  StyledLogo, 
} from './styles'

const Header = ({fixed, children, onClick, ...otherProps}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <StyledHeader fixed={fixed} {...otherProps}>
        <StyledLogo>
          <h3>Matheus Noronha</h3>
          <h6>Web developer</h6>
        </StyledLogo>
        <ThemedButtons active={menuOpen} variant='hamburger' onClick={toggleMenu}/>
        <MenuHeader Open={menuOpen} onClick={onClick}/>
         {children}
      </StyledHeader>
  )
}

export default Header

// sGTzRg5QCYTvdTrgngmexMRAdzyptEB5KXIEyhgc