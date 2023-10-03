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

    ul {
      flex-direction: column;
      align-items: center;
      margin-top: 4px;
    }
  }
`;

export { StyledMenu }