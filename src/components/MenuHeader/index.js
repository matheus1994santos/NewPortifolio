import React from 'react'
import { StyledMenu } from './styles'

const MenuHeader = ({Open}) => {
  return (
    <StyledMenu isOpen={Open}>
        <ul>
        <li>Início</li>
        <li>Projetos</li>
        <li>Sobre</li>
        <li>Contatos</li>
        </ul>
    </StyledMenu>
  )
}

export default MenuHeader
