import DisplayCards from "../../components/DisplayCards";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: "10vh",
  },
  buttons: { minWidth: "15vw", marginTop: "5vh" },
}));

const Pokemon = ({
  setPokemonFavorites,
  pokemonFavorites,
  rickFavorites,
  setRickFavorites,
}) => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${pageNumber}&limit=20`)
      .then((res) => setCharacters(res.data.results));
  }, [pageNumber]);
  console.log(characters);

  const nextPage = () => {
    if (pageNumber >= 130) {
      return;
    }
    if (pageNumber === 120) {
      setPageNumber(130);
      return;
    }
    console.log(pageNumber);
    return setPageNumber(pageNumber + 20);
  };

  const prevPage = () => {
    if (pageNumber === 0) {
      return;
    }

    if (pageNumber === 130) {
      return setPageNumber(pageNumber - 10);
    }
    console.log(pageNumber);
    return setPageNumber(pageNumber - 20);
  };

  return (
    <>
      <Grid container spacing={2} direction="row">
        <DisplayCards
          characters={characters}
          setPokemonFavorites={setPokemonFavorites}
          pokemonFavorites={pokemonFavorites}
          rickFavorites={rickFavorites}
          setRickFavorites={setRickFavorites}
          isPokemon
        ></DisplayCards>
      </Grid>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button onClick={() => prevPage()} className={classes.buttons}>
          <ChevronLeftIcon></ChevronLeftIcon>
        </Button>
        <Button onClick={() => nextPage()} className={classes.buttons}>
          <ChevronRightIcon></ChevronRightIcon>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Pokemon;
