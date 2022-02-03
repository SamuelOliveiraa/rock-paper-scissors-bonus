import styled from "styled-components";

type Props = {
  bg?: string;
  color?: string;
};

export const Container = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export const Button = styled.div<Props>`
  width: 100px;
  background-color: ${(props) => (props.bg ? props.bg : "transparent")};
  border: 1px solid var(--header-outline);
  border-radius: 6px;
  color: ${(props) => (props.color ? props.color : "#f0f2f4")};
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f2f4;
    color: var(--dark-text);
    box-shadow: 0 2px 25px 4px rgba(256, 256, 256, 0.2);
  }
`;
