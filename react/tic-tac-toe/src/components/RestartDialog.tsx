import { Button } from "./Button";
import { Dialog } from "./Dialog";

type PropsType = {

  onCancel?: Function;
  onRestart?: Function;
};

export function RestartDialog(props: PropsType) {
  return (
    <Dialog>
      <div className="flex flex-col justify-center items-center gap-4 p-9">
        <h1 className="uppercase text-3xl text-primary">restart game ?</h1>

        <div className="flex  flex-row gap-4">
          <Button
            title="no, cancel"
            className="bg-primary rounded-md border-b-[3px]
            border-b-grayButtonShadow w-auto text-xs h-auto"
            onClick={props.onCancel}
          />
          <Button
            title="yes, restart"
            className="bg-yellowButton rounded-md border-b-[3px]
            border-b-yellowButtonShadow w-auto h-auto text-xs"
            onClick={props.onRestart}
          />
        </div>
      </div>
    </Dialog>
  );
}
