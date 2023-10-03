import React from 'react'
import { StyledHamburgerButton } from './styles';

const ThemedButtons = ({active , variant ,...otherProps}) => {

    return( 
        <StyledHamburgerButton {...otherProps} active={active}>
            <div></div>
            <div></div>
            <div></div>
        </StyledHamburgerButton>
    ); 
    

}

export default ThemedButtons