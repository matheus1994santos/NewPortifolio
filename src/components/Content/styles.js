import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction ? direction : 'column'};
  align-items: ${ ({align}) => align };
  justify-content: ${ ({justify}) => justify ? justify : '' };
  padding: 0 4.5%;
  padding-top: ${(props) => props.isfixed ? '70px' : '100px'};
  padding: ${ ({theme,pv}) => pv ? theme.spacing[pv] : '' } ${ ({theme,ph}) => ph ? theme.spacing[ph] : '' };
  height: 862px;
  background-color: ${ ({theme, background}) => theme.colors[background]}50;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
  }
`;
