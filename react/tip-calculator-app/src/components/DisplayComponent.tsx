type PropType = {
  title: string;
  subTitle: string;
  price: number;
}
export function DisplayComponent(props:PropType) {
  return (
    <div className="flex justify-between">
      <div className="mb-7">
        <h4 className="text-white">{props.title}</h4>
        <span className="text-cyan-darkgrayish">{props.subTitle}</span>
      </div>
      <p className="text-cyan-strong text-4xl" id="tip">
        ${props.price.toFixed(2)}
      </p>
    </div>
  );
}
