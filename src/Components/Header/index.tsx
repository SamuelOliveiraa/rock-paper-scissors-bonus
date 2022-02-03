import { Container, Points } from "./style";
import Logo from "/images/logo-bonus.svg";

type Props = {
  points: number;
};

const Header = ({ points }: Props) => {
  return (
    <Container>
      <img src={Logo} alt="" />

      <Points>
        <h2>Score</h2>

        <span>{points}</span>
      </Points>
    </Container>
  );
};

export default Header;
