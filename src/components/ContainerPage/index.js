import React from 'react'
import { StyledContainer } from './styles'

const Container = ({children, Url, ...otherProps}) => {
  return (
    <StyledContainer {...otherProps} url={Url}>
        {children}
    </StyledContainer>
  )
}

export default Container
