import { Container, Button } from "./style";

type Props = {
  handleOpen: () => void
} 

const Buttons = ({handleOpen}: Props) => {
  return (
    <Container>
      <Button onClick={handleOpen}>Rules</Button>
    </Container>
  );
};

export default Buttons;
