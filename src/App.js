import "./App.css";
import RickAndMorty from "./pages/RickAndMorty/";
import Pokemon from "./pages/Pokemon/";
import Routes from "./Routes";
import MenuTab from "./components/MenuTab/";

function App() {
  return (
    <div className="App">
      <MenuTab></MenuTab>
      <Routes></Routes>
    </div>
  );
}

export default App;
