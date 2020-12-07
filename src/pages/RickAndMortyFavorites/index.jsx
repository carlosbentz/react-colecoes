import { Grid } from "@material-ui/core";
import DisplayCards from "../../components/DisplayCards";

const RickAndMortyFavorites = ({
  characters,
  rickFavorites,
  setRickFavorites,
  pokemonFavorites,
  setPokemonFavorites,
}) => {
  characters = rickFavorites;
  return (
    <Grid container spacing={2} direction="row">
      <DisplayCards
        characters={characters}
        rickFavorites={rickFavorites}
        setRickFavorites={setRickFavorites}
        pokemonFavorites={pokemonFavorites}
        setPokemonFavorites={setPokemonFavorites}
        isRemovable
        isRickAndMorty
      ></DisplayCards>
    </Grid>
  );
};

export default RickAndMortyFavorites;
