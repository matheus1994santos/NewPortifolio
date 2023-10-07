import React from 'react'
import { StyledContainer } from './styles'

const Container = ({children, ...otherProps}) => {
  return (
    <StyledContainer {...otherProps}>
        {children}
    </StyledContainer>
  )
}

export default Container
