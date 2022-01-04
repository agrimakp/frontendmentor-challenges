import { Button } from "./components/Button";

function App() {
  return (
    <div
      className=" h-screen
    font-body
    text-[32px] text-white-neutral
    flex
    text-center
    justify-center
    bg-blue-desaturated"
    >
      <div className="h-[200px] w-[325px]">
        <div className="flex justify-between items-center py-5">
          <h1>calc</h1>
          <div className="text-[13px] flex gap-6">
            <span>THEME</span>
          </div>
        </div>
        <div className="bg-blue-veryDark rounded-lg p-5 text-right">
          <span id="inputDisplay">0</span>
        </div>
        <div
          className="
          bg-blue-dark1
          mt-6
          rounded-lg
          py-5
          flex flex-wrap
          gap-3
          items-center
          justify-center
          text-blue-darkGrayish
        "
        >
          <Button title="7" />
          <Button title="8" />
          <Button title="9" />
          <Button
            title="DEL"
            className="bg-blue-dark2 border-0 border-b-4 border-blue-dark3 text-[16px] text-white-neutral"
          />

          <Button title="4" />
          <Button title="5" />
          <Button title="6" />
          <Button title="+" />

          <Button title="1" />
          <Button title="2" />
          <Button title="3" />
          <Button title="-" />

          <Button title="." />
          <Button title="0" />
          <Button title="/" />
          <Button title="x" />

          <Button
            title="RESET"
            className="bg-blue-dark2
            border-0 border-b-4 border-blue-dark3 text-[16px] text-white-neutral w-[140px]"
          />

          <Button
            title="="
            className="bg-red-normal
            border-0 border-b-4 border-red-dark
            w-[140px] text-[16px] text-white-neutral"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
