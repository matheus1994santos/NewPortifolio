import React from 'react'
import { StyledContent } from './styles'

const Content = ({
  children, 
  bg, pv, ph,
  fixed, 
  Url, direction, justify,
  ...otherProps
}) => {
    const height = window.innerHeight;
  return (
    <StyledContent 
      background={bg} 
      height={height} 
      {...otherProps} 
      isfixed={fixed} 
      url={Url}
      direction={direction}
      justify={justify}
    >
        {children}
    </StyledContent>
  )
}

export default Content
