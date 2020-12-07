import { Route, Switch, Redirect } from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import RickAndMorty from "./pages/RickAndMorty";
import { useState } from "react";
import RickAndMortyFavorites from "./pages/RickAndMortyFavorites/";
import PokemonFavorites from "./pages/PokemonFavorites/";

const Routes = () => {
  const [pokemonFavorites, setPokemonFavorites] = useState(() => {
    const favoritePokemonList = localStorage.getItem("favoritePokemonList");
    if (favoritePokemonList) {
      return JSON.parse(favoritePokemonList);
    }
    return [];
  });

  const [rickFavorites, setRickFavorites] = useState(() => {
    const favoriteRickList = localStorage.getItem("favoriteRickList");
    if (favoriteRickList) {
      return JSON.parse(favoriteRickList);
    }
    return [];
  });

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/pokemon"></Redirect>
      </Route>
      <Route path="/pokemon">
        <Pokemon
          pokemonFavorites={pokemonFavorites}
          setPokemonFavorites={setPokemonFavorites}
          rickFavorites={rickFavorites}
          setRickFavorites={setRickFavorites}
        ></Pokemon>
      </Route>
      <Route path="/rick-and-morty">
        <RickAndMorty
          rickFavorites={rickFavorites}
          setRickFavorites={setRickFavorites}
          pokemonFavorites={pokemonFavorites}
          setPokemonFavorites={setPokemonFavorites}
        ></RickAndMorty>
      </Route>
      <Route path="/favorites/pokemon">
        <PokemonFavorites
          pokemonFavorites={pokemonFavorites}
          setPokemonFavorites={setPokemonFavorites}
          rickFavorites={rickFavorites}
          setRickFavorites={setRickFavorites}
        ></PokemonFavorites>
      </Route>
      <Route path="/favorites/rick-and-morty">
        <RickAndMortyFavorites
          rickFavorites={rickFavorites}
          setRickFavorites={setRickFavorites}
          pokemonFavorites={pokemonFavorites}
          setPokemonFavorites={setPokemonFavorites}
        ></RickAndMortyFavorites>
      </Route>
    </Switch>
  );
};

export default Routes;
