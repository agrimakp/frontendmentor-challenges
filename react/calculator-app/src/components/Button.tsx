type PropType = {
  title: string;
  onClick?: Function;
  className?: string;
};

export function Button(props: PropType) {
  return (
    <button
      className={`
    bg-accent
    border-0 border-b-4 border-accent
    w-16
    h-16
    p-2
    text-primary
    rounded-md
    ${props.className}
  `}
      onClick={props.onClick as any}
    >
      {props.title}
    </button>
  );
}
