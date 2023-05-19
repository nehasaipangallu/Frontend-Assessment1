import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, HashRouter, } from "react-router-dom";
import NavBar from './navBar/NavBar';
import Searchbar from './searchbar/Searchbar';
import Cards from './Components/cards/Cards';
import ModalPop from './modal/ModalPop';
import  { useContext } from "react";
import  theme from'./theme.js' ;
import { ThemeContext } from './themeprovider/ThemeProvider';

const getStyles = (mode) => ({
  app: {
    backgroundColor: theme[mode].backgroundColor
  },
  text: {
    color: theme[mode].color
  },
  theme: {
    color: theme[mode].highlight
  }
});

function App() {
  const { mode } = useContext(ThemeContext);
  //const styles = getStyles(mode);
  
  return (
    // <div className="App" style={styles.app}>
    <div className="App">
      <NavBar />

      <HashRouter>
        <Routes>

          <Route
            exact
            path="/"
            element={< Searchbar />}
          ></Route>
        </Routes>
        </HashRouter>
        <ModalPop />
    </div>
  );
}

export default App;
