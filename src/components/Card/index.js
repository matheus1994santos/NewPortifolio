import React from 'react'
import { StyledDivCard } from './styles'

const Card = ({
  children, 
  bg,
  mv, mh, mt, mb, ml, mr,
  ph, pv, pt, pb, pl, pr, 
  color, gap, 
  justify='', align, direction,

  ...otherProps
}) => {
  return (
    <StyledDivCard 
        bg={bg} 
        mv={mv} mh={mh}   
        mt={mt} mb={mb} ml={ml} mr={mr}
        pt={pt} pb={pb} pl={pl} pr={pr}
        pv={pv} ph={ph}
        color={color} justify={justify} align={align}
        gap={gap} direction={direction}
        {...otherProps}
    >
        {children}
    </StyledDivCard>
  )
}

export default Card
