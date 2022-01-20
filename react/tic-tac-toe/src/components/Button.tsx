type PropTypes = {
  title: string;
  className: string;
  onClick: Function;
};
export function Button(props: PropTypes) {
  return (
    <div
      className={`p-3 rounded-2xl w-full
     flex justify-center border-b-8  ${props.className}`}
    >
      <button
        className="uppercase font-bold tracking-widest"
        onClick={props.onClick as any}
      >
        {props.title}
      </button>
    </div>
  );
}
