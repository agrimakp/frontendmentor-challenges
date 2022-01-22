import { useEffect, useState } from "react";
import { calculateWinner } from "../ticTacToe";
import { BoxContainer } from "./BoxContainer";
import { HeaderComponent } from "./HeaderComponent";

type PropsType = {
  playerMark: "x" | "o";
  playerTwo: "cpu" | "player2";
};
export function GameBoard(props: PropsType) {
  const [boxValue, setBoxValue] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const [xWinCount, setxWinCount] = useState(0);
  const [oWinCount, setoWinCount] = useState(0);
  const [tiesWinCount, settiesWinCount] = useState(0);

  const winner = calculateWinner(boxValue);

  const onPress = (index: number) => {
    if (winner || boxValue[index]) {
      return;
    }

    const mark = xIsNext ? "x" : "o";

    // take a copy of boxValue
    const temp = boxValue.slice();
    temp[index] = mark;
    setxIsNext(!xIsNext);
    setBoxValue(temp);
  };

  const restart = () => {
    setBoxValue(Array(9).fill(null));
    setxIsNext(true);
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

  return (
    <div className="flex flex-col gap-16">
      <HeaderComponent onNextTurn={xIsNext} onRestart={restart} />
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
  );
}
