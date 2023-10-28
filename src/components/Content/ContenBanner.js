import React from 'react'
import { StyledBanner } from './styles'

const ContentBanner = ({children}) => {
  return (
    <StyledBanner>
      {children}
    </StyledBanner>
  )
}

export default ContentBanner
