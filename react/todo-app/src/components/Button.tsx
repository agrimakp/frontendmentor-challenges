type propsType = {
  title: string;
  onClick?: Function;
  className?: string;
}
export function Button(props: propsType){

  return (
    <button
          className={`active:text-white focus:text-white hover::text-white ${props.className}`}
          data-all="{props.title}"
          onClick={props.onClick as any}
        >
          {props.title}
        </button>
  );
}