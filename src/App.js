import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Login from "./pages/login";
import Register from "./pages/register";
import Withdraw from "./pages/withdraw";
import Send from "./pages/send";

const theme = {
  color: {
    primary: "#D6FBFB",
    secondary: "#455050",
    button: "#54F5F5",
    tertiary: "#FF725E",
    link: "#2B8C7B",
  },
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background-color: ${(props) => props.theme.color.primary};
  max-height: 100vh;
}
a {
  text-decoration: none;
  color: ${(props) => props.theme.color.link}
}

li {
  list-style: none;
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/send">
            <Send />
          </Route>

          <Route path="/withdraw">
            <Withdraw />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
