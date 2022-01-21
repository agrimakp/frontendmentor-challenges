export function HeaderComponent() {
  return (
    <div className="flex flex-row justify-between">
      <img className="w-24" src="assets/logo.svg" alt="logo" />

      <div
        className="bg-playerSelect rounded-md border-b-shade border-b-4
        flex items-center justify-center gap-2 w-1/4"
      >
        <img className="w-4" src="./assets/icon-x-gray.svg" alt="turn" />
        <h2 className="text-primary text-[12px] font-bold">TURN</h2>
      </div>

      <div
        className="bg-grayButton border-b-grayButtonShadow border-b-4
       w-11 rounded-md flex items-center justify-center"
      >
        <img className="w-4" src="./assets/icon-restart.svg" />
      </div>
    </div>
  );
}
