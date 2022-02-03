import styled from "styled-components";

export const Container = styled.div<{ msg: string }>`
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  margin: 4rem auto;
  margin-bottom: 2rem;

  :last-child {
    grid-column: 3/4;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: 190px 0.7fr 190px;
    grid-template-rows: 1fr;
  }
`;

export const PickHouse = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  -webkit-animation: pulse-animation 1.5s ease-out infinite;
  animation: pulse-animation 1.5s ease-out infinite;

  @media screen and (min-width: 600px) {
    width: 150px;
    height: 150px;
  }

  @keyframes pulse-animation {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      opacity: 0.3;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

export const PickContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  color: #f0f2f4;
  position: relative;

  h2 {
    font-size: 1.3rem;
    max-width: 150px;
    margin-bottom: 1.5rem;
  }

  :last-child {
    grid-column: 2 / -1;
    grid-row: 1;
  }
  > div:nth-child(2) {
    justify-self: auto;
  }

  @media screen and (min-width: 600px) {
    h2 {
      max-width: 100%;
    }
    :last-child {
      grid-column: 3 / -1;

      grid-row: auto;
    }
  }
`;

export const Message = styled.div`
  text-align: center;
  justify-self: center;
  grid-column: 1 / -1;

  h2 {
    font-size: 2rem;
    color: #f0f2f4;
    margin-bottom: 1rem;
  }

  > div {
    width: 100%;
    padding: 1rem;
  }
  @media screen and (min-width: 600px) {
    grid-column: auto;
    h2 {
      font-size: 2.4rem;
    }
  }
`;
