import styled from "styled-components";

const StyledHamburgerButton = styled.div`
  display: flex;
  //width: 43px;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  background-color: ${ ({active}) =>  active && '#fff' };
  border: 1px solid ${({active}) => !active ? 
    '#fff' : '#005C53'
  };
  

  div {
    width: 22px;
    height: 2px;
    background-color: ${({active}) => !active ? 
      '#fff' : '#005C53'
    };
    margin: 3px 0;
    border-radius: 8px;
  }
`;

export const StyledFlex = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    @media (min-width: 1100px) {
    display: none;
  }
`;

export { StyledHamburgerButton }