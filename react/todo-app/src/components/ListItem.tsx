import { InputBox } from "./InputBox";
import styles from "./List.module.css";
type PropType = {
  index: number;
  isChecked: boolean;
  title: string;
  onCheck?: Function;
  onDelete?: Function;
};
export function ListItem(props: PropType) {
  return (
    <li
      className={`border-b border-blue-darkGrayish p-4 ${styles.round}  px-6`}
      key={props.index}
    >
      <input
        type="checkbox"
        id={`checkbox${props.index}`}
        onClick={props.onCheck as any}
        checked={props.isChecked}
      />
      <label className="mt-3" htmlFor={`checkbox${props.index}`}></label>
      <span className="ml-2" id="todo">
        {props.title}
      </span>
      <button className="float-right" onClick={props.onDelete as any}>
        X
      </button>
    </li>
  );
}
