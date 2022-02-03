import { Container, PlayContainer } from "./style";

type Props = {
  handleSelected: (select: string) => void;
};

const Plays = ({ handleSelected }: Props) => {
  return (
    <Container>
      <PlayContainer
        onClick={() => handleSelected("scissors")}
        chosen="scissors"
      />
      <PlayContainer onClick={() => handleSelected("spock")} chosen="spock" />
      <PlayContainer onClick={() => handleSelected("paper")} chosen="paper" />
      <PlayContainer onClick={() => handleSelected("lizard")} chosen="lizard" />
      <PlayContainer onClick={() => handleSelected("rock")} chosen="rock" />
    </Container>
  );
};

export default Plays;
