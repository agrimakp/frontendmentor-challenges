import { Button } from "./Button";

export function PickPlayer() {
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
          <div
            className="rounded-lg w-[150px] h-14
          flex items-center justify-center"
          >
            <img className="w-8" src="assets/icon-x-gray.svg" />
          </div>
          <div
            className="bg-grayButton rounded-lg w-[150px] h-14
          flex items-center justify-center"
          >
            <img className="w-8" src="assets/icon-o-dark.svg" />
          </div>
        </div>
        <h3 className="text-primary opacity-50">REMEMBER : X GOES FIRST</h3>
      </div>
      <Button title="New Game (vs cpu)" className="border-b-yellowButton bg-yellowButton" />
      <Button title="New Game (vs player)" className="border-b-blueButtonShadow bg-blueButton" />
    </div>
  );
}
