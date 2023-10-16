import React from 'react'
import { StyledFlex, StyledHamburgerButton } from './styles';

const ThemedButtons = ({active , variant ,...otherProps}) => {

    return( 
        <StyledFlex>
            <StyledHamburgerButton {...otherProps} active={active}>
                <div></div>
                <div></div>
                <div></div>
            </StyledHamburgerButton>
        </StyledFlex>
    ); 
    

}

export default ThemedButtons