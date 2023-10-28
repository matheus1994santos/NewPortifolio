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
  gap: 10px;

  @media (min-width: 1680px) {
    height: 934px;
  }

  @media (max-width: 768px) {
  }
`;


export const StyledBanner = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 86%;
  border-radius: 8px;
  padding: 16px 8%;
  background-color: ${({theme}) => theme.colors.secondary}80;
`;

export const StyledContentTitle = styled.div`
  border: 1px solid red;
  width: 100%;
  border-radius: 8px;
  padding: 16px 8%;
  background-color: ${({theme}) => theme.colors.secondary}80;
`;