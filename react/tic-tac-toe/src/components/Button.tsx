type PropTypes = {
  title: string;
  className?: string;
  onClick?: Function;
};
export function Button(props: PropTypes) {
  return (
    <button
      className={`p-3 rounded-2xl w-full
      flex justify-center border-b-8 uppercase font-bold tracking-widest ${props.className}`}
      onClick={props.onClick as any}
    >
      {props.title}
    </button>
  );
}
