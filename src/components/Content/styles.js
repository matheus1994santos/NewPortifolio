import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 4.5%;
  padding-top: ${(props) => props.isfixed && '200px'};
  height: ${ (props) => props.isfixed ? '1058px':'862px'};
  background-color: ${ ({theme, background= 'primary'}) => theme.colors[background]}50;


  @media (max-width: 768px) {
  }
`;
