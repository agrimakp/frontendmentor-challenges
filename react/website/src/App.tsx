import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="text-blue-700 flex gap-4 p-4 border-b-gray-600 border-b">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
    </>
  );
}

function About() {
  return (
    <>
      <h2>Who are we?</h2>
      <p>That feels like an existential question, don't you think?</p>
      {/* <Link to="/about/location">Our Address</Link> */}
      {/* <Routes>
        <Route path="/location" element={<Location />} />
      </Routes> */}
    </>
  );
}

function Location() {
  return (
    <>
      <div>Address: US</div>
    </>
  );
}

export default App;
