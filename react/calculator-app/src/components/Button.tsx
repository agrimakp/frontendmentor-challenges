type PropType = {
  title: string;
  onClick?: Function;
  className?: string;
};

export function Button(props: PropType) {
  return (
    <button
      className={`
    bg-orange-lightGrayish
    border-0 border-b-4 border-orange-grayishOrange
    w-16
    h-16
    p-2
    rounded-md
    ${props.className}
  `}
      onClick={props.onClick as any}
    >
      {props.title}
    </button>
  );
}
