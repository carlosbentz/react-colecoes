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

const DisplayCards = ({ characters }) => {
  const classes = useStyles();

  const getPokemonImg = (url) => {
    let brokenUrl = url.slice(34);
    brokenUrl = brokenUrl.split("/");
    const id = brokenUrl[0];
    return id;
  };

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
                  : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonImg(
                      character.url
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
            <Button size="medium" color="primary" className={classes.favorites}>
              Adicionar aos favoritos
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default DisplayCards;
