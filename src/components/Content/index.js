import React from 'react'
import { StyledContent } from './styles'

const Content = ({children, bg, fixed, ...otherProps}) => {
    const height = window.innerHeight;
  return (
    <StyledContent background={bg} height={height} {...otherProps} isfixed={fixed}>
        {children}
    </StyledContent>
  )
}

export default Content
