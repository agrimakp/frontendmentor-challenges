import { Button } from "./Button";
import { Dialog } from "./Dialog";

type PropsType = {
  winner: string;
  onNext: Function;
  onExit: Function;
};

export function RestartDialog(props: PropsType) {
  return (
    <Dialog>
      <div className="flex flex-col justify-center items-center gap-4 p-9">
        <h4 className="uppercase text-primary font-bold">you won !</h4>
        <div className="flex flex-row items-center gap-4">
          {props.winner == "x" ? (
            <img src="./assets/icon-x.svg" className="h-12" />
          ) : (
            <img src="./assets/icon-o.svg" className="h-12" />
          )}
          <p className="uppercase text-3xl text-blueButton">takes the round</p>
        </div>
        <div className="flex  flex-row gap-4">
          <Button
            title="Quit"
            className="bg-primary rounded-md border-b-[3px]
            border-b-grayButtonShadow w-20 text-xs"
            onClick={props.onExit}

          />
          <Button
            title="next round"
            className="bg-yellowButton rounded-md border-b-[3px]
            border-b-yellowButtonShadow w-30 text-xs"
            onClick={props.onNext}
          />
        </div>
      </div>
    </Dialog>
  );
}
