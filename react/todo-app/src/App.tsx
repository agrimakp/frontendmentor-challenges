import { HeaderComponent } from "./components/HeaderComponent";
import { TodoComponent } from "./components/TodoComponent";

function App() {
  return (
    <div
      className=" h-screen
    font-body
    text-[18px] text-white
    bg-mobile-dark bg-no-repeat bg-blue-veryDark
    md:bg-desktop-dark
    bg-contain
    flex
    justify-center"
    >
      <div
        className="w-[325px]
        md:w-[600px]
        h-[200px]
        flex flex-col
        mt-12
        text-blue-darkGrayish"
      >
        <HeaderComponent />
        <TodoComponent />
      </div>
    </div>
  );
}

export default App;
