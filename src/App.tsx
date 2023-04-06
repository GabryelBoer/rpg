import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCaracter } from "./hooks/useCharacter";

const App = () => {
  const char = useCaracter("Boer");
  const char2 = useCaracter("Maria");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        char.moveLeft();
        break;
      case "KeyW":
      case "ArrowUp":
        char.moveUp();
        break;
      case "KeyD":
      case "ArrowRight":
        char.moveRight();
        break;
      case "KeyS":
      case "ArrowDown":
        char.moveDown();
        break;
    }
  };
  return (
    <C.Container>
      <C.Map>
        <Character
          x={char.x}
          y={char.y}
          side={char.side}
          username={char.username}
        />
        <Character x={10} y={6} side={"right"} username={char2.username} />
      </C.Map>
    </C.Container>
  );
};

export default App;
