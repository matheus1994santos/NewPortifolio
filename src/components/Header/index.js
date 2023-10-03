import {useState} from 'react'

import Content from '../Content';
import MenuHeader from '../MenuHeader';
import ThemedButtons from '../ThemedButtons';

import { 
  StyledHeader, 
  StyledLogo, 
} from './styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <StyledHeader>
        <StyledLogo>
          <h3>Matheus Noronha</h3>
          <h6>Web developer</h6>
        </StyledLogo>
        <ThemedButtons active={menuOpen} variant='hamburger' onClick={toggleMenu}/>
        <MenuHeader Open={menuOpen}
        //  onClick={({target}) => console.log(target.innerText)}
         />
      </StyledHeader>
  )
}

export default Header

// sGTzRg5QCYTvdTrgngmexMRAdzyptEB5KXIEyhgc