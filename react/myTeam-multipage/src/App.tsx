import { Banner } from "./components/Banner";
import { Teams } from "./components/Teams";

function App() {
  return (
    <div className="h-[768px] w-screen text-main prose">
      <Banner />
      <Teams/>
    </div>
  );
}

export default App;
