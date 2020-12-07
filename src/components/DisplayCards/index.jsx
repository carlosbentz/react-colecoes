import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
    minWidth: "356px",
    maxWidth: "356px",
    minHeight: "513px",
    maxHeight: "513px",
    margin: "auto",
  },

  favorites: {
    margin: "auto",
    placeItems: "flex-end",
  },
});

const DisplayCards = ({
  characters,
  setPokemonFavorites,
  pokemonFavorites,
  rickFavorites,
  setRickFavorites,
  isRemovable = false,
  isPokemon = false,
  isRickAndMorty = false,
}) => {
  const classes = useStyles();

  const getPokemonId = (url) => {
    let brokenUrl = url.slice(34);
    brokenUrl = brokenUrl.split("/");
    const id = brokenUrl[0];
    return id;
  };

  const handleAddPokemonFavorite = (char) => {
    const alreadyExist = pokemonFavorites.find(
      (element) => element.id === char.id
    );
    if (alreadyExist) return;
    setPokemonFavorites([...pokemonFavorites, char]);
  };

  const handleRemovePokemonFavorite = (char) => {
    const newList = pokemonFavorites.filter(
      (character) => character.id !== char.id
    );
    localStorage.setItem("favoritePokemonList", JSON.stringify(newList));
    setPokemonFavorites(newList);
  };

  const handleAddRickFavorite = (char) => {
    const alreadyExist = rickFavorites.find(
      (element) => element.id === char.id
    );
    if (alreadyExist) return;
    setRickFavorites([...rickFavorites, char]);
  };

  const handleRemoveRickFavorite = (char) => {
    const newList = rickFavorites.filter(
      (character) => character.id !== char.id
    );
    localStorage.setItem("favoriteRickList", JSON.stringify(newList));
    setPokemonFavorites(newList);
  };

  useEffect(() => {
    localStorage.setItem(
      "favoritePokemonList",
      JSON.stringify(pokemonFavorites)
    );
    localStorage.setItem("favoriteRickList", JSON.stringify(rickFavorites));
  }, [pokemonFavorites, rickFavorites]);

  return (
    <>
      {characters.map((character, index) => (
        <Card className={classes.card} key={index}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              alt={character.name}
              image={
                character.image
                  ? character.image
                  : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
                      character.url,
                      (character.id = getPokemonId(character.url))
                    )}.png`
              }
              title={character.name}
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {character.name.toUpperCase()}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {isRemovable ? (
              isPokemon ? (
                <Button
                  size="medium"
                  color="primary"
                  className={classes.favorites}
                  onClick={() => handleRemovePokemonFavorite(character)}
                >
                  Remover dos favoritos
                </Button>
              ) : (
                isRickAndMorty && (
                  <Button
                    size="medium"
                    color="primary"
                    className={classes.favorites}
                    onClick={() => handleRemoveRickFavorite(character)}
                  >
                    Remover dos favoritos
                  </Button>
                )
              )
            ) : isPokemon ? (
              <Button
                size="medium"
                color="primary"
                className={classes.favorites}
                onClick={() => handleAddPokemonFavorite(character)}
              >
                Adicionar aos favoritos
              </Button>
            ) : (
              isRickAndMorty && (
                <Button
                  size="medium"
                  color="primary"
                  className={classes.favorites}
                  onClick={() => handleAddRickFavorite(character)}
                >
                  Adicionar aos favoritos
                </Button>
              )
            )}
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default DisplayCards;
