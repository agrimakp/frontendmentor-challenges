type PropsType = {
  title: string;
  dataValue?: number;
  className?: string;
};
export function Button(props: PropsType) {
  return (
    <button
      // onClick="selectTip"
      data-value={props.dataValue}
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
