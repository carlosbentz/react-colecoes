import { Link, useHistory } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: "5vh",
  },
  buttons: { minWidth: "15vw" },
}));

const NavTabs = () => {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab
            label="Pokémon"
            {...a11yProps(0)}
            onClick={() => history.push("/pokemon")}
          />
          <LinkTab
            label="Rick and Morty"
            {...a11yProps(1)}
            onClick={() => history.push("/rick-and-morty")}
          />
          <LinkTab
            label="Favoritos"
            {...a11yProps(2)}
            onClick={() => history.push("/favorites/pokemon")}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={2}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            onClick={() => history.push("/favorites/pokemon")}
            className={classes.buttons}
          >
            <ChevronLeftIcon></ChevronLeftIcon> Pokémon
          </Button>
          <Button
            onClick={() => history.push("/favorites/rick-and-morty")}
            className={classes.buttons}
          >
            Rick and Morty<ChevronRightIcon></ChevronRightIcon>
          </Button>
        </ButtonGroup>
      </TabPanel>
    </div>
  );
};

export default NavTabs;
