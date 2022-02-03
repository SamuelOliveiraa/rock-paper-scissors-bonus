import Header from "./Components/Header";
import GlobalStyle from "./App.style";
import { useState } from "react";
import Buttons from "./Components/Buttons";
import Modal from "./Components/Modal";
import Plays from "./Components/Plays";
import Game from "./Components/Game";

const App = () => {
  const [points, setPoints] = useState(0);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("");
  const [msg, setMsg] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelected = (select: string) => {
    setSelected(select);
  };

  const handleSelectedHouse = (select: string) => {
    setSelectedHouse(select);
  };

  const handleMsg = (message: boolean | undefined) => {
    if (message === undefined) {
      setMsg("It´s a draw");
    } else if (message) {
      setMsg("You Win");
      setPoints(points + 1);
    } else {
      setMsg("You Lose");
      if (points !== 0) {
        setPoints(points - 1);
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header points={points} />

      {selected === "" ? (
        <Plays handleSelected={handleSelected} />
      ) : (
        <Game
          selected={selected}
          msg={msg}
          handleSelected={handleSelected}
          handleSelectedHouse={handleSelectedHouse}
          selectedHouse={selectedHouse}
          handleMsg={handleMsg}
        />
      )}

      <Buttons handleOpen={handleOpen} />
      <Modal open={open} handleOpen={handleOpen} />
    </>
  );
};

export default App;
