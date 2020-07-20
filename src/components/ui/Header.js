import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import logo from "../../assets/LTI_logo.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  logo: {
    height: "2rem",
    marginLeft: "1rem"
  },
  logoText: {
    marginLeft: "1rem"
  },
  tabsContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: "20px",
    "&:nth-last-child(1)": {
      marginRight: "20px"
    }
  }
}));

function Header(props) {
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/create" && value !== 1) {
      setValue(1);
    }
  }, [value]);

  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} className={classes.logo} alt="company logo" />
            <Typography variant="h4" className={classes.logoText}>
              OC
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabsContainer}
            >
              <Tab
                component={Link}
                to="/"
                className={classes.tab}
                label="Home"
              />
              <Tab
                component={Link}
                to="/create"
                className={classes.tab}
                label="Create"
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
