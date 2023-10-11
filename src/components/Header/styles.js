import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${props => props.fixed ? props.bg : 'inherit'};
  color: ${ (props) => props.fixed ? '#FFF' : '#000' };
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 40px;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 10px 40px;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const StyledLogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const StyledContent = styled.div`
  padding: 0 4px;
  display: flex;
  background-color: ${ ({theme}) => theme.colors.primary}50;
  height: 100%;


  @media (max-width: 768px) {
  }
`;
