import React, { useState } from 'react'
import { StyledMenu } from './styles'

const MenuHeader = ({
  Open, 
  option = ['Início', 'Projetos', 'Contatos', 'Sobre'],
  ...otherProps
}) => {
  return (
    <StyledMenu isOpen={Open}>
        <ul>
          {option.map(options => (
          <li {...otherProps}>{options}</li>
          ))}
        </ul>
    </StyledMenu>
  )
}

export default MenuHeader
