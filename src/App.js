import React from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import { ThemeProvider, createGlobalStyle } from "styled-components";
import useTheme from "./useTheme";
import ToggleMode from "./ToggleMode";
import style from "styled-theming";
import "./styles.css";

const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111"
});

const getForeground = style("mode", {
  light: "#111",
  dark: "#EEE"
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
`;

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <div className="App">
            <ToggleMode />
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/shop" component={Shop} />
            </Switch>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
};

export default App;
