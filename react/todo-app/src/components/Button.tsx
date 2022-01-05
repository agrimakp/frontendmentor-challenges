type propsType = {
  title: string;
  onClick?: Function;
  className?: string;
}
export function Button(props: propsType){

  return (
    <a
          href={`#${props.title}`}
          className={`active:text-white focus:text-white hover::text-white ${props.className}`}
          data-all="{props.title}"
          onClick={props.onClick as any}
        >
          {props.title}
        </a>
  );
}
