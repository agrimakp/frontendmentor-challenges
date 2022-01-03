import { TipCalculator } from "./components/TipCalculator";

function App() {
  return (
    <div
      className="bg-cyan-lightgrayish
    h-screen
    font-body
    flex
    items-center
    justify-center
    gap-12
    flex-col"
    >
      <img className="w-16 h-auto" src="./images/logo.svg" />
      <TipCalculator />
    </div>
  );
}

export default App;
