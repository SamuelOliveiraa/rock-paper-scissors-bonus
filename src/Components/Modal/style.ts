import styled from "styled-components";

type Props = {
  open: boolean;
};

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(Flex)<Props>`
  background-color: #f0f2f4;
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-200rem")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  justify-content: flex-start;

  @media screen and (min-width: 500px) {
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.5rem;

  @media screen and (min-width: 500px) {
    max-width: 350px;
    background-color: #f0f2f4;
    border-radius: 6px;
    padding: 1.3rem;
  }
`;

export const Header = styled(Flex)`
  justify-content: space-between;

  h2 {
    color: var(--dark-text);
  }

  > svg {
    color: var(--header-outline);
    font-size: 1.3rem;
    cursor: pointer
  }
`;

export const ImgContainer = styled.div`
  max-width: 230px;
  margin: 2rem auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 500px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
