import { useState } from "react";
import { Calculator } from "./components/Calculator";

function App() {
  const [theme, setTheme] = useState("");
  return (
    <div
      className={` ${theme}
      h-screen
  font-body
  text-[32px] text-main
  flex
  items-center
  text-center
  justify-center
  bg-primary`}
    >
      <div className="w-[325px]">
        <div className="flex justify-between items-center py-5">
          <h1>calc</h1>
          <div className="text-[13px] flex gap-6 items-end">
            <span>THEME</span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 justify-center">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className="switch-toggle switch-3 switch-candy ">

                <input id="on" name="state-d" type="radio" checked={true} />
                <label htmlFor="on" onClick={() => {setTheme("")}}>
                  <span className="text-blue-dark1 p-1"></span>
                </label>

                <input id="na" name="state-d" type="radio" checked={true} />
                <label htmlFor="na" className="disabled" onClick={() => {setTheme("theme2")}}>
                  <span className="text-blue-dark1 p-1"></span>
                </label>

                <input id="off" name="state-d" type="radio" />
                <label htmlFor="off" onClick={() => {setTheme("theme3")}}>
                  <span className="text-blue-dark1 p-1"></span>
                </label>

              </div>
            </div>
          </div>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
