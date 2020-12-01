import { Route, Switch } from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import RickAndMorty from "./pages/RickAndMorty";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        página inicial
      </Route>
      <Route path="/pokemon">
        <Pokemon></Pokemon>
      </Route>
      <Route path="/rick-and-morty">
        <RickAndMorty></RickAndMorty>
      </Route>
      <Route path="/favorites/pokemon">pokemons favoritos</Route>
      <Route path="/favorites/rick-and-morty">Rick and morty favoritos</Route>
    </Switch>
  );
};

export default Routes;
