import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
`;
