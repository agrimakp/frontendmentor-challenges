type PropTypes = {
  title: string;
  className: string;
}
export function Button(prop:PropTypes) {
  return (
    <div className={`p-3 rounded-2xl w-full
     flex justify-center border-b-8  ${prop.className}`}>
      <button className="uppercase font-bold tracking-widest">{prop.title}</button>
    </div>
  );
}
