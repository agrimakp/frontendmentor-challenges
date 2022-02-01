type PropsType = {
  children: React.ReactNode;
};
export function Dialog(props: PropsType) {
  return (
    <div className="bg-black bg-opacity-50 z-50 flex items-center w-screen h-screen absolute top-0 left-0">
      <div className="bg-main w-screen">{props.children}</div>
    </div>
  );
}
