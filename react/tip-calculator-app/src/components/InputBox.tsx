
type PropTypes = {
  name: string;
  icon: string;
  placeHolder: string;
};
export function InputBox(props: PropTypes) {
  return (
    <>
      <label
        className="block text-cyan-verydark text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {props.name}
      </label>

      <div
        className="
    relative
    hover:border
    hover:border-solid
    hover:border-green-500
    hover:rounded
    border border-solid border-transparent
  "
      >
        <img
          src={props.icon}
          className="absolute
    top-[10px]
    left-2"
        />
        <input
          className="
      appearance-none
      bg-cyan-lightgray
      rounded
      w-full
      py-2
      px-3
      text-right text-gray-700
      leading-tight
      focus:outline-none focus:shadow-outline
      pl-10
      block
    "
          id={props.name}
          type="number"
          placeholder={props.placeHolder}
          // onChange="changeBillInput"
        />
      </div>
    </>
  );
}
