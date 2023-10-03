import React from 'react'
import { StyledHamburgerButton } from './styles';

const ThemedButtons = ({variant ,...otherProps}) => {

    return( 
        <>
        { variant === 'hamburguer' &&
            <StyledHamburgerButton {...otherProps}>
                <div></div>
                <div></div>
                <div></div>
            </StyledHamburgerButton>
        }
        </>
    ); 
    

}

export default ThemedButtons