import { useEffect, useState } from "react";
import { calculateWinner } from "../ticTacToe";
import { BoxContainer } from "./BoxContainer";
import { HeaderComponent } from "./HeaderComponent";
import { RestartDialog } from "./RestartDialog";
import { WinDialog } from "./WinDialog";

type PropsType = {
  playerMark: "x" | "o";
  playerTwo: "cpu" | "player2";
  onExit: () => void;
};
export function GameBoard(props: PropsType) {
  const [boxValue, setBoxValue] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("x");

  const [xWinCount, setxWinCount] = useState(0);
  const [oWinCount, setoWinCount] = useState(0);
  const [tiesWinCount, settiesWinCount] = useState(0);

  const [showRestart, setShowRestart] = useState<boolean>();

  const winner = calculateWinner(boxValue);

  useEffect(() => {
    if (props.playerTwo != "cpu") {
      return;
    }

    if (winner) {
      // no more turns. game over
      return;
    }

    console.log("current turn is now", currentTurn);
    if (props.playerMark != currentTurn) {
      setTimeout(() => {
        cpuLogic();
        console.log("cpu is making a move");
        setCurrentTurn((old) => (old === "x" ? "o" : "x"));
      }, 1000);
    }
  }, [currentTurn]);

  const cpuLogic = () => {
    let rndInt = Math.floor(Math.random() * 8) + 0;

    while (boxValue[rndInt]) {
      // index is occupied
      rndInt = Math.floor(Math.random() * 8) + 0;
    }
    // index is free

    const mark = props.playerMark === "x" ? "o" : "x";

    setBoxValue((oldBoxValue) => {
      const temp = oldBoxValue.slice();
      temp[rndInt] = mark;
      return temp;
    });
  };

  const onPress = (index: number) => {
    if (props.playerTwo == "cpu" && props.playerMark != currentTurn) {
      console.log("not yet boyo. Wait for your turn!");
      return;
    }

    if (winner || boxValue[index]) {
      return;
    }

    setBoxValue((oldBoxValue) => {
      const temp = oldBoxValue.slice();
      temp[index] = currentTurn;
      return temp;
    });

    setCurrentTurn((old) => (old === "x" ? "o" : "x"));
  };

  const restart = () => {
    setBoxValue(Array(9).fill(null));
    setCurrentTurn("x");
    setShowRestart(false);
  };

  useEffect(() => {
    if (winner == "x") {
      setxWinCount(xWinCount + 1);
    } else if (winner == "o") {
      setoWinCount(oWinCount + 1);
    } else if (winner === "tie") {
      settiesWinCount(tiesWinCount + 1);
    }
  }, [winner]);

  const exit = () => {
    props.onExit();
  };

  const restartDialog = () => {
    setShowRestart(true);
  }

  return (
    <>
      {winner ? (
        <WinDialog winner={winner} onNext={restart} onExit={exit} />
      ) : null}
      {showRestart ? <RestartDialog onCancel={exit} onRestart={restart} /> : null}
      <div className="flex flex-col gap-16">
        <HeaderComponent nextTurn={currentTurn} onRestart={restartDialog} />
        <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full">
          <BoxContainer
            value={boxValue[0]}
            onClick={() => {
              onPress(0);
            }}
          />
          <BoxContainer
            value={boxValue[1]}
            onClick={() => {
              onPress(1);
            }}
          />
          <BoxContainer
            value={boxValue[2]}
            onClick={() => {
              onPress(2);
            }}
          />
          <BoxContainer
            value={boxValue[3]}
            onClick={() => {
              onPress(3);
            }}
          />
          <BoxContainer
            value={boxValue[4]}
            onClick={() => {
              onPress(4);
            }}
          />
          <BoxContainer
            value={boxValue[5]}
            onClick={() => {
              onPress(5);
            }}
          />
          <BoxContainer
            value={boxValue[6]}
            onClick={() => {
              onPress(6);
            }}
          />
          <BoxContainer
            value={boxValue[7]}
            onClick={() => {
              onPress(7);
            }}
          />
          <BoxContainer
            value={boxValue[8]}
            onClick={() => {
              onPress(8);
            }}
          />

          <div
            className="bg-blueButton rounded-lg h-16
        flex flex-col items-center justify-center"
          >
            <span className="uppercase">
              x ({props.playerMark == "x" ? "you" : props.playerTwo})
            </span>
            <h3 className="font-bold text-lg">{xWinCount}</h3>
          </div>
          <div
            className="bg-grayButton rounded-lg h-16
        flex flex-col items-center justify-center"
          >
            <span>TIES</span>
            <h3 className="font-bold text-lg">{tiesWinCount}</h3>
          </div>
          <div
            className="bg-yellowButton rounded-lg h-16
        flex flex-col items-center justify-center"
          >
            <span className="uppercase">
              o ({props.playerMark == "o" ? "you" : props.playerTwo})
            </span>
            <h3 className="font-bold text-lg">{oWinCount}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
