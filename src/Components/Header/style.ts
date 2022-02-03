import styled from "styled-components";

export const Container = styled.header`
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--header-outline);
  padding: 1.2rem 1rem;
  border-radius: 6px;
  margin: 0 auto;

  img {
    width: 120px;
  }

  @media screen and (min-width: 550px) {
    padding: 2rem 1rem;

    img {
      width: 162px;
    }
  }
`;

export const Points = styled(Container)`
  background-color: #f0f2f4;
  flex-direction: column;
  color: var(--score-text);
  margin: 0;
  padding: 0.5rem 1.5rem;

  h2 {
    font-size: 1rem;
    font-weight: 300;
  }
  span {
    font-size: 3rem;
    color: var(--dark-text);
  }

  @media screen and (min-width: 550px) {
    padding: 1rem 3rem;

    h2 {
      font-size: 1.2rem;
    }
    span {
      font-size: 4rem;
    }
  }
`;
