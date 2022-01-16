export function HeaderComponent(prop:any) {
  const switchTheme = () => {
    prop.onSwitchTheme();
  };
  return (
    <div className="flex justify-between h-[38px] ">
      <h1 className="font-bold text-[26px] text-skin-due">devfinder</h1>

      <div className="flex gap-2 cursor-pointer" onClick={switchTheme}>
        <span className="text-[13px] text-skin-due uppercase">
          {prop.theme}
        </span>
        <div
          className={`${(prop.theme == 'dark') ? 'bg-icon-sun' : 'bg-icon-moon' } bg-no-repeat w-[21px] h-[21px] iconFilter`}
        ></div>
      </div>
    </div>
  );
}
