import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.defaultTextColor};
  font-family: 'Barlow Condensed', sans-serif;
  position: fixed;
  display: flex;
  width: 100%;
  height: 81px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 40px;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 10px 40px;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 18px;
  margin-bottom: 0;

  @media (max-width: 768px) {

  }
`;

export const StyledLogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const StyledContent = styled.div`
  padding: 0 4px;
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;


  @media (max-width: 768px) {
  }
`;
