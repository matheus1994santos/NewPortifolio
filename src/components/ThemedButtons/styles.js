import styled from "styled-components";

const StyledHamburgerButton = styled.div`
  display: flex;
  width: 43px;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid ${({active}) => active ? 
    '#fff' : '#005C53'
  };
  

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
  }
`;

export const StyledFlex = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    @media (min-width: 890px) {
    display: none;
  }
`;

export { StyledHamburgerButton }