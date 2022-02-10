type PropTypes = {
  onTheme?: Function;
};
export function HeaderComponent(props: PropTypes) {
  return (
    <div className="my-4 flex justify-between">
      <h1 className="text-3xl md:text-5xl text-white font-bold tracking-[12px]">
        TODO
      </h1>
      <div
        className="bg-icon-sun bg-no-repeat w-8 h-8 cursor-pointer"
        onClick={props.onTheme as any}
      ></div>
    </div>
  );
}
