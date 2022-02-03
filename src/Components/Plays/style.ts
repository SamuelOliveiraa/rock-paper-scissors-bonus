import styled from "styled-components";
import bg from "/images/bg-pentagon.svg";
import Rock from "/images/icon-rock.svg";
import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Spock from "/images/icon-spock.svg";
import Lizard from "/images/icon-lizard.svg";

type Props = {
  chosen: string;
};

export const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: bottom;
  background-position-y: 5px;
  max-width: 650px;
  height: 460px;
  margin: 4rem auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 125px;
  gap: 1rem 0;
  justify-items: center;

  @media screen and (min-width: 450px) {
    grid-auto-rows: 145px;
    background-size: 360px;
    background-position-y: 45px;
  }

  @media screen and (min-width: 550px) {
    background-size: 455px;
    height: 475px;
    background-position-y: 35px;
    justify-items: center;
  }
`;

export const PlayContent = styled.div<{ msg: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: all 0.2s;
  -webkit-box-shadow: ${(props) =>
    props.msg &&
    ` 0 0 0 20px rgba(255, 255, 255, 0.09),
    0 0 0 40px rgba(255, 255, 255, 0.06), 0 0 0 60px rgba(255, 255, 255, 0.03)`};
  box-shadow: ${(props) =>
    props.msg &&
    ` 0 0 0 20px rgba(255, 255, 255, 0.09),
    0 0 0 40px rgba(255, 255, 255, 0.06), 0 0 0 60px rgba(255, 255, 255, 0.03)`};

  @media screen and (min-width: 550px) {
    width: 120px;
    height: 120px;
  }
`;

export const PlayContainer = styled.div<Props>`
  ${(props) => props.chosen === 'rock' && `background: url(${Rock})`};
  ${(props) => props.chosen === 'paper' && `background: url(${Paper})`};
  ${(props) => props.chosen === 'scissors' && `background: url(${Scissors})`};
  ${(props) => props.chosen === 'lizard' && `background: url(${Lizard})`};
  ${(props) => props.chosen === 'spock' && `background: url(${Spock})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  background-color: #f0f2f4;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 50%;

  ${(props) =>
    props.chosen === "rock" &&
    `border: 15px solid #dc2e4e; box-shadow: inset 0 6px rgb(0 0 0 / 20%),
      0 6px rgb(221 64 93 / 70%);`}

  ${(props) =>
    props.chosen === "paper" &&
    `border: 15px solid #4865f4; box-shadow: inset 0 6px rgb(0 0 0 / 20%),
      0 6px rgb(86 113 245 / 70%);`}

${(props) =>
    props.chosen === "scissors" &&
    `border: 15px solid #ec9e0e; box-shadow: inset 0 6px rgb(0 0 0 / 20%),
      0 6px rgb(236 169 34 / 70%);`}

${(props) =>
    props.chosen === "lizard" &&
    `border: 15px solid #834fe3; box-shadow: inset 0 6px rgb(0 0 0 / 20%),
      0 6px rgba(131, 90, 247,0.7) ;`}

${(props) =>
    props.chosen === "spock" &&
    `border: 15px solid #40b9ce; box-shadow: inset 0 6px rgb(0 0 0 / 20%),
      0 6px rgba(64, 196, 226, 0.7);`}


  :nth-child(1) {
    grid-column: -1 / 1;
    margin-top: -20px;
  }
  :nth-child(2) {
    margin-left: -80px;
    margin-top: -70px;
  }
  :nth-child(3) {
    margin-left: 80px;
    margin-top: -70px;
  }
  :nth-child(4) {
    margin-right: -25px;
    margin-top: -30px;
  }
  :nth-child(5) {
    margin-right: 25px;
    margin-top: -30px;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 450px) {
    :nth-child(1) {
      margin-top: 0;
    }
    :nth-child(2) {
      margin-left: -100px;
      margin-top: -20px;
    }
    :nth-child(3) {
      margin-left: 100px;
      margin-top: -20px;
    }
    :nth-child(4) {
      margin-right: -25px;
      margin-top: 20px;
    }
    :nth-child(5) {
      margin-right: 25px;
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 550px) {
    width: 120px;
    height: 120px;

    :nth-child(2) {
      margin-left: -100px;
      margin-top: -30px;
    }
    :nth-child(3) {
      margin-left: 100px;
      margin-top: -30px;
    }
    :nth-child(4) {
      margin-right: -25px;
      margin-top: 80px;
    }
    :nth-child(5) {
      margin-right: 25px;
      margin-top: 80px;
    }
  }
`;
