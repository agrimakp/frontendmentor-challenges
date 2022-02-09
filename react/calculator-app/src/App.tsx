import { Calculator } from "./components/Calculator";

function App() {
  return (
    <div
      className=" h-screen
  font-body
  text-[32px] text-main
  flex
  items-center
  text-center
  justify-center
  bg-primary"
    >
      <div className="w-[325px]">
        <div className="flex justify-between items-center py-5">
          <h1>calc</h1>
          <div className="text-[13px] flex gap-6">
            <span>THEME</span>
          </div>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
