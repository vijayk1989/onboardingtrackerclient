import { createMuiTheme } from "@material-ui/core";

const ltiBlue = "#00008C";
const ltiDarkBlue = "#00006A";
const customOrange = "#FFB442";
const semiDarkBlue = "#0046C4";
const skyBlue = "#0072E1";
const hazyBlue = "#009BE5";
const lightBlue = "#00C1D6";
const seaGreen = "#00E6C0";
const greyTextColor = "#7B7485";

export default createMuiTheme({
  palette: {
    common: {
      ltiBlue: `${ltiBlue}`,
      ltiDarkBlue: `${ltiDarkBlue}`,
      buttonOrange: `${customOrange}`,
      semiDarkBlue: `${semiDarkBlue}`,
      skyBlue: `${skyBlue}`,
      hazyBlue: `${hazyBlue}`,
      lightBlue: `${lightBlue}`,
      seaGreen: `${seaGreen}`,
      greyTextColor: `${greyTextColor}`,
    },
    primary: {
      main: `${seaGreen}`,
    },
    secondary: {
      main: `${ltiBlue}`,
    },
  },
  typography: {
    h4: {
      fontWeight: 500,
    },
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1rem",
      minWidth: 10,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: 16,
      },
    },
  },
});
