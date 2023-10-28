import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex: 1;
  height: 60px;
  justify-content: flex-end;
  align-items: center;


  & ul {
    list-style: none;
    display: flex;
    gap: 4px;
    align-items: center;

    & li {
      padding: 8px;
      font-size: 12px;
      font-weight: 700;
      font-family: Arial, sans-serif;
      letter-spacing: 0.1rem;
      cursor: pointer;
      border-radius: 8px;
      text-align: center;
    }

    li:hover{
      background-color: #fff;
      color: #000;
      text-shadow: none;
    }
  }


  @media (max-width: 1100px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    right: 0;
    top: 60px;
    min-height: 90vh;
    height: 830px;
    background-color:${({ theme }) => theme.colors.background};
    
    ul {
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 190px;
      padding: 0 2%;
      padding-top: 8px;
      border-top: 0.4px solid #fff;

      li {
        font-size: 16px;
        text-align: center;
        width: 100%;
        padding: 8px 0px;
        border-bottom: 0.4px solid #fff;
      }
    }
    
  }
`;

export const StyledLi = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;

  :hover{
    color: red;
  }
`