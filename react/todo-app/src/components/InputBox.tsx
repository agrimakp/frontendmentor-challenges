type PropType = {
  name: string;
  value: string;
  onChange?: Function;
  placeholder: string;
  className?: string;
  id?: string;
  type?: string;
};
export function InputBox(props: PropType) {
  return (
    <input
      className={`bg-blue-desaturated text-sm ml-2 outline-none ${props.className}`}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      id={props.id}
      onChange={props.onChange as any}
    />
  );
}
