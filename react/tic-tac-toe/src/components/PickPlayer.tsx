import { Button } from "./Button";

type PropTypes = {
  onPick: Function;
  onSelectMark: Function;
  selected: string;
};

export function PickPlayer(props: PropTypes) {
  return (
    <div className="flex flex-col gap-7 justify-center items-center">
      <img className="max-w-min" src="assets/logo.svg" alt="logo" />

      <div
        className="bg-playerSelect rounded-2xl border-b-8 border-b-shade
       w-[370px] p-6 flex flex-col items-center gap-4"
      >
        <h2 className="text-primary font-bold">PICK PLAYERS 1'S MARK</h2>
        <div
          className="bg-selector w-[320px] h-[70px] rounded-lg
         flex flex-row items-center justify-evenly"
        >
          <button
            className={`${
              props.selected == "x" ? "bg-selector " : "bg-grayButton"
            } rounded-lg w-[150px] h-14
          flex items-center justify-center`}
            onClick={() => {
              props.onSelectMark("x");
            }}
          >
            {props.selected == "x" ? (
              <img className="w-8" src="assets/icon-x-gray.svg" />
            ) : (
              <img className="w-8" src="assets/icon-x-dark.svg" />
            )}
          </button>
          <button
            className={`${
              props.selected == "x" ? "bg-grayButton " : "bg-selector"
            }  rounded-lg w-[150px] h-14
          flex items-center justify-center`}
            onClick={() => {
              props.onSelectMark("o");
            }}
          >
            {props.selected == "x" ? (
                <img className="w-8" src="assets/icon-o-dark.svg" />
            ) : (
              <img className="w-8" src="assets/icon-o-gray.svg" />
            )}

          </button>
        </div>
        <h3 className="text-primary opacity-50">REMEMBER : X GOES FIRST</h3>
      </div>
      <Button
        title="New Game (vs cpu)"
        onClick={() => {
          props.onPick("cpu");
        }}
        className="border-b-yellowButton bg-yellowButton"
      />
      <Button
        title="New Game (vs player)"
        onClick={() => {
          props.onPick("player");
        }}
        className="border-b-blueButtonShadow bg-blueButton"
      />
    </div>
  );
}
