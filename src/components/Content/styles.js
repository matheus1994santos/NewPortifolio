import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  padding: 0 4.5%;
  height: 838px;
  background-color: ${ ({theme, background= 'primary'}) => theme.colors[background]}50;


  @media (max-width: 768px) {
  }
`;
