import { HeaderComponent } from "./components/HeaderComponent";
import { UserSearch } from "./components/UserSearch";

function App() {
  return (
    <div className="bg-blue-veryDark h-screen w-screen text-white flex justify-center items-center text-[18px] font-body">
      <div className="w-[730px] flex flex-col">
        <HeaderComponent />
        <UserSearch />
      </div>
    </div>
  );
}

export default App;
