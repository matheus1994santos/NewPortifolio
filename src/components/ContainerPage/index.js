import React from 'react'
import { StyledContainer } from './styles'

const Container = ({children, Url, gap, ...otherProps}) => {
  return (
    <StyledContainer {...otherProps} url={Url} gap={gap}>
        {children}
    </StyledContainer>
  )
}

export default Container
