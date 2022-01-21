type PropsType = {
  onClick: Function;
  value: "x" | "o";
};
export function BoxContainer(props: PropsType) {
  return (
    <button
      className="bg-playerSelect w-30 h-28
        flex items-center justify-center cursor-pointer
        rounded-xl border-b-8 border-b-shade"
      onClick={props.onClick as any}
    >
      {props.value === "o" ? (
        <img className="w-14" src="./assets/icon-o.svg" />
      ) : null}
      {props.value === "x" ? (
        <img className="w-14" src="./assets/icon-x.svg" />
      ) : null}
    </button>
  );
}
