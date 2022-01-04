import { TipCalculator } from "./components/TipCalculator";
import logo from "./images/logo.svg";

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
      <img className="w-16 h-auto" src={logo} />
      <TipCalculator />
    </div>
  );
}

export default App;
