import { Container, PlayContainer } from "./style";

type Props = {
  handleSelected: (select: string) => void;
};

const Plays = ({ handleSelected }: Props) => {
  return (
    <Container>
      <PlayContainer
        onClick={() => handleSelected("scissors")}
        img="/images/icon-scissors.svg"
        chosen="scissors"
      />
      <PlayContainer
        onClick={() => handleSelected("spock")}
        img="/images/icon-spock.svg"
        chosen="spock"
      />
      <PlayContainer
        onClick={() => handleSelected("paper")}
        img="/images/icon-paper.svg"
        chosen="paper"
      />
      <PlayContainer
        onClick={() => handleSelected("lizard")}
        img="/images/icon-lizard.svg"
        chosen="lizard"
      />
      <PlayContainer
        onClick={() => handleSelected("rock")}
        img="/images/icon-rock.svg"
        chosen="rock"
      />
    </Container>
  );
};

export default Plays;
