import { Grid } from "@material-ui/core";
import DisplayCards from "../../components/DisplayCards";

const PokemonFavorites = ({
  characters,
  pokemonFavorites,
  setPokemonFavorites,
  rickFavorites,
  setRickFavorites,
}) => {
  characters = pokemonFavorites;
  return (
    <Grid container spacing={2} direction="row">
      <DisplayCards
        characters={characters}
        pokemonFavorites={pokemonFavorites}
        setPokemonFavorites={setPokemonFavorites}
        rickFavorites={rickFavorites}
        setRickFavorites={setRickFavorites}
        isRemovable
        isPokemon
      ></DisplayCards>
    </Grid>
  );
};

export default PokemonFavorites;
