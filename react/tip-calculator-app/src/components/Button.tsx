type PropsType = {
  title: string;
  className?: string;
  onClick?: Function;
};
export function Button(props: PropsType) {
  return (
    <button
      onClick={props.onClick as any}
      className={`
                tip
                bg-cyan-verydark
                hover:bg-cyan-lightgrayish hover:text-cyan-verydark
                text-white
                min-w-[30%]
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
                ${props.className}
              `}
      type="button"
    >
      {props.title}
    </button>
  );
}
