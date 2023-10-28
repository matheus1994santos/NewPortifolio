import React from 'react'
import { StyledContent } from './styles'
import ContentBanner from './ContenBanner';
import ContentTItle from './ContentTItle';

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

Content.Banner = ContentBanner;
Content.Title = ContentTItle;


export default Content
