import axios from "axios";
import { useEffect, useState } from "react";
import DisplayCards from "../../components/DisplayCards";
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

const RickAndMorty = ({
  rickFavorites,
  setRickFavorites,
  pokemonFavorites,
  setPokemonFavorites,
}) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [data, setData] = useState();
  const classes = useStyles();

  const changePage = (page) => {
    return page && setPage(page);
  };

  const getCharacters = () => {
    axios
      .get(`${page}`)
      .then((res) => {
        setCharacters(...[res.data.results]);
        setData(...[res.data]);
        return;
      })
      .catch((res) => console.log("error", res));
  };

  useEffect(getCharacters, [page]);

  console.log(characters);
  console.log(page);
  console.log(data);
  return (
    <div>
      <Grid container spacing={2} direction="row">
        <DisplayCards
          characters={characters}
          rickFavorites={rickFavorites}
          setRickFavorites={setRickFavorites}
          pokemonFavorites={pokemonFavorites}
          setPokemonFavorites={setPokemonFavorites}
          isRickAndMorty
        ></DisplayCards>
      </Grid>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button
          onClick={() => changePage(data.info.prev)}
          className={classes.buttons}
        >
          <ChevronLeftIcon></ChevronLeftIcon>
        </Button>
        <Button
          onClick={() => changePage(data.info.next)}
          className={classes.buttons}
        >
          <ChevronRightIcon></ChevronRightIcon>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default RickAndMorty;
