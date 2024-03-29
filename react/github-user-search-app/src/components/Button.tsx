type PropsTypes = {
  onClick?: Function;
};
export function Button(prop: PropsTypes) {
  return (
    <button
      type="submit"
      className="bg-skin-button-accent
      text-white
   rounded-md
   w-[106px]
   min-w-[82px]
   h-[36px]
   m-2"
      onClick={prop.onClick as any}
    >
      Search
    </button>
  );
}
