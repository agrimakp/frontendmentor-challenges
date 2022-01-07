import { HeaderComponent } from "./components/HeaderComponent";
import { UserSearch } from "./components/UserSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
        <UserSearch/>
      </header>
    </div>
  );
}

export default App;
