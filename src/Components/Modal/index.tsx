import { Container, Header, ImgContainer, Content } from "./style";
import Rules from "/images/image-rules-bonus.svg";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  open: boolean;
  handleOpen: () => void;
};

const Modal = ({ open, handleOpen }: Props) => {
  return (
    <Container open={open}>
      <Content>
        <Header>
          <h2>Rules</h2>

          <AiOutlineClose onClick={handleOpen} />
        </Header>

        <ImgContainer>
          <img src={Rules} alt="" />
        </ImgContainer>
      </Content>
    </Container>
  );
};

export default Modal;
