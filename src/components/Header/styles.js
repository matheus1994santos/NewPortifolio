import styled from "styled-components";

// export const StyledContainer = styled.header(({ theme }) => ({
//     gap: theme.spacing[3],
// }));


const StyledHeader = styled.header`
  background-color: #005C53;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 80px;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 10px 40px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const StyledLogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const StyledContent = styled.div`
  padding: 0 4px;
  display: flex;
  background-color: ${ ({theme}) => theme.colors.primary}50;
  height: 100%;


  @media (max-width: 768px) {
  }
`;

export { 
    StyledLogo, 
    StyledLogoImage, 
    StyledHeader,
    StyledContent,
}