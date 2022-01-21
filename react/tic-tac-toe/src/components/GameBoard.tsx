import { useState } from "react";
import { BoxContainer } from "./BoxContainer";
import { HeaderComponent } from "./HeaderComponent";

type PropsType = {
  playerMark: "x" | "o";
  playerTwo: "cpu" | "player";
};
export function GameBoard(props: PropsType) {
  const [boxValue, setBoxValue] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const onPress = (index: number) => {
    const mark = xIsNext ? "x" : "o";

    // take a copy of boxValue
    const temp = boxValue.slice();
    temp[index] = mark;
    setxIsNext(!xIsNext);
    setBoxValue(temp);
  };
  const restart = () => {
    setBoxValue(Array(9).fill(null));
  };

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
          <span>X(YOU)</span>
          <h3 className="font-bold text-lg">14</h3>
        </div>
        <div
          className="bg-grayButton rounded-lg h-16
        flex flex-col items-center justify-center"
        >
          <span>TIES</span>
          <h3 className="font-bold text-lg">32</h3>
        </div>
        <div
          className="bg-yellowButton rounded-lg h-16
        flex flex-col items-center justify-center"
        >
          <span>O (CPU)</span>
          <h3 className="font-bold text-lg">11</h3>
        </div>
      </div>
    </div>
  );
}
