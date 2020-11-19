//Import Components
import FetchUsers from "./components/fetchUsers";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <FetchUsers></FetchUsers>
      </header>
    </div>
  );
}

export default App;
