import styled from "styled-components";

// export const StyledContainer = styled.header(({ theme }) => ({
//     gap: theme.spacing[3],
// }));

const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledHeader = styled.header`
  background-color: #005C53;
  color: #fff;
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 20px 80px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledLogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const StyledMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; // Correção aqui

    ul {
      flex-direction: column;
      align-items: center;
      margin-top: 4px;
    }
  }
`;

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

export { 
    StyledHeaderContainer, 
    StyledLogo, 
    StyledLogoImage, 
    StyledMenu, 
    StyledHamburgerButton,
    StyledHeader,
}