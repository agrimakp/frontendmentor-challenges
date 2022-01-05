type PropType = {
  index: number;
  isChecked: boolean;
  title: string;
}
export function List(props: PropType){

  return(
    <li className="border-b border-blue-darkGrayish p-4 round px-6" key={props.index}>
    <input type="checkbox" checked={props.isChecked} />
    <label className="mt-3" htmlFor={`checkbox${props.index}`}></label>
    <span className="ml-2" id="todo">
      {props.title}
    </span>
    <button className="float-right">X</button>
  </li>
  );
}
