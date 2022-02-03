import { Container, PickContainer, PickHouse, Message } from "./style";
import { Button } from "../Buttons/style";
import { PlayContainer, PlayContent } from "../Plays/style";
import { useEffect, useState } from "react";

type Props = {
  selected: string;
  msg: string;
  selectedHouse: string;
  handleMsg: (message: boolean | undefined) => void;
  handleSelected: (select: string) => void;
  handleSelectedHouse: (select: string) => void;
};

const Game = ({
  selected,
  msg,
  selectedHouse,
  handleMsg,
  handleSelectedHouse,
  handleSelected,
}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      var nomes = ["rock", "scissors", "paper", "lizard", "spock"];
      handleSelectedHouse(nomes[Math.floor(Math.random() * nomes.length)]);
    }, 2500);
  }, [selected]);

  useEffect(() => {
    if (selectedHouse === selected) {
      handleMsg(undefined);
    } else if (
      selectedHouse === "spock" &&
      (selected === "scissors" || selected === "rock")
    ) {
      handleMsg(false);
    } else if (
      selectedHouse === "scissors" &&
      (selected === "paper" || selected === "lizard")
    ) {
      handleMsg(false);
    } else if (
      selectedHouse === "lizard" &&
      (selected === "spock" || selected === "paper")
    ) {
      handleMsg(false);
    } else if (
      selectedHouse === "rock" &&
      (selected === "lizard" || selected === "scissors")
    ) {
      handleMsg(false);
    } else if (
      selectedHouse === "paper" &&
      (selected === "rock" || selected === "spock")
    ) {
      handleMsg(false);
    } else if (
      selected === "spock" &&
      (selectedHouse === "scissors" || selectedHouse === "rock")
    ) {
      handleMsg(true);
    } else if (
      selected === "scissors" &&
      (selectedHouse === "paper" || selectedHouse === "lizard")
    ) {
      handleMsg(true);
    } else if (
      selected === "lizard" &&
      (selectedHouse === "spock" || selectedHouse === "paper")
    ) {
      handleMsg(true);
    } else if (
      selected === "rock" &&
      (selectedHouse === "lizard" || selectedHouse === "scissors")
    ) {
      handleMsg(true);
    } else if (
      selected === "paper" &&
      (selectedHouse === "rock" || selectedHouse === "spock")
    ) {
      handleMsg(true);
    }
  }, [selectedHouse]);

  const handlePlayAgain = () => {
    handleSelectedHouse("");
    handleSelected("");
    handleMsg(undefined);
  };

  return (
    <Container msg={msg}>
      <PickContainer>
        <h2>You Picked</h2>

        <PlayContent msg={msg === "You Win" && true}>
          <PlayContainer chosen={selected} />
        </PlayContent>
      </PickContainer>

      <>
        {selectedHouse !== "" && (
          <Message>
            <h2>{msg}</h2>

            <Button
              onClick={handlePlayAgain}
              color="var(--dark-text)"
              bg="#f0f2f4"
            >
              Play Again
            </Button>
          </Message>
        )}
      </>

      <PickContainer>
        <h2>The House Picked</h2>

        {selectedHouse === "" ? (
          <PickHouse />
        ) : (
          <PlayContent msg={msg === "You Lose" && true}>
            <PlayContainer chosen={selectedHouse} />
          </PlayContent>
        )}
      </PickContainer>
    </Container>
  );
};

export default Game;
