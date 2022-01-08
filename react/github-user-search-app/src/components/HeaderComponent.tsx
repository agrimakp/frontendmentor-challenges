export function HeaderComponent() {
  return (
    <div className="flex justify-between h-[38px]">
      <h1 className="font-bold">devfinder</h1>

      <div className="flex gap-2">
        <span className="text-[13px]">LIGHT</span>
        <div className="bg-icon-sun bg-no-repeat w-[21px] h-[21px]"></div>
      </div>
    </div>
  );
}
