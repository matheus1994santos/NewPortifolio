import React from 'react'
import { StyledContent } from './styles'

const Content = ({children, bg}) => {
    const height = window.innerHeight;
  return (
    <StyledContent background={bg} height={height}>
        {children}
    </StyledContent>
  )
}

export default Content
