import styled from "styled-components";

const StyledHamburgerButton = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export { StyledHamburgerButton }