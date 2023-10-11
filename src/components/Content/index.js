import React from 'react'
import { StyledContent } from './styles'

const Content = ({children, bg, fixed, Url, ...otherProps}) => {
    const height = window.innerHeight;
  return (
    <StyledContent background={bg} height={height} {...otherProps} isfixed={fixed} url={Url}>
        {children}
    </StyledContent>
  )
}

export default Content
