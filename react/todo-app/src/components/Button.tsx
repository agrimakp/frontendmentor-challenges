type propsType = {
  title: string;
  onClick?: Function;
  className?: string;
};
export function Button(props: propsType) {
  return (
    <button
      className={`active:text-blue-brightblue focus:text-blue-brightblue hover::text-blue-accent ${props.className}`}
      data-all="{props.title}"
      onClick={props.onClick as any}
    >
      {props.title}
    </button>
  );
}
