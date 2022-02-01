import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { PickPlayer } from "./components/PickPlayer";
import { RestartDialog } from "./components/RestartDialog";

type PlayerType = "cpu" | "player2";
type MarkType = "x" | "o";

function App() {
  const [playerPicked, setPlayerPicked] = useState<PlayerType | "">("");
  const [playerMark, setPlayerMark] = useState<MarkType>("x");

  let setPlayer = (player: PlayerType) => {
    setPlayerPicked(player);
  };

  let setMark = (mark: MarkType) => {
    setPlayerMark(mark);
  };

  const reset = () => {
    setPlayerPicked("");
  };

  return (
    <div
      className=" bg-main h-screen w-screen text-[14px] font-body
    font-medium tracking-[0.8px] flex items-center justify-center"
    >
      <div className="w-[375px]">
        {playerPicked ? (
          <GameBoard
            playerTwo={playerPicked}
            playerMark={playerMark}
            onExit={reset}
          />
        ) : (
          <PickPlayer
            onPick={setPlayer}
            onSelectMark={setMark}
            selected={playerMark}
          />
        )}
      </div>
    </div>
  );
}

export default App;
