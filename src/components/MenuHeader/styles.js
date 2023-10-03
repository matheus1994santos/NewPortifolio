import styled from "styled-components";

const StyledMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 18px;
  }

  @media (max-width: 769px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    right: 0;
    top: 100px;
    background-color: #005C53;
    ul {
      flex-direction: column;
      align-items: center;
      min-height: 87.5vh;
      width: 225px;
      padding: 0 2%;
      padding-top: 8px;
      border-top: 0.4px solid #fff;
    }
    
    li {
      font-size: 20px;
      text-align: center;
      width: 100%;
      padding: 8px 0px;
      border-bottom: 0.4px solid #fff;
      cursor: pointer;
    }
  }
`;

export { StyledMenu }