import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4.5%;
  padding-top: ${(props) => props.isfixed ? '70px' : '100px'};
  height: ${ (props) => props.isfixed ? '950px':'862px'};
  background-color: ${ ({theme, background= 'primary'}) => theme.colors[background]}50;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;

  @media (max-width: 768px) {
  }
`;
