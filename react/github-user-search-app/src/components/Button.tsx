type PropsTypes={
  onClick?: Function;
}
export function Button(prop:PropsTypes) {
  return (
    <button
      className="bg-blue-light
   rounded-md
   w-[106px]
   h-[36px]
   m-2"
   onClick={prop.onClick as any}
    >
      Search
    </button>
  );
}
