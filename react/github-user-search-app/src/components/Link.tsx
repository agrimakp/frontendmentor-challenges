type PropsType = {
  title: string;
  className: string;
  iconName: string;
}
export function Link(prop:PropsType) {
  return (
    <>
      <div className={`flex ${prop.className} lg:order-1`}>
        <div className= {` ${prop.iconName} bg-no-repeat p-4 iconFilter`}></div>
        <span>{prop.title}</span>
      </div>
    </>
  );
}
