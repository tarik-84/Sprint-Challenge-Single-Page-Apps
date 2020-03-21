import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import SearchForm from './components/SearchForm'

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path='/search' component={SearchForm} />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/Characters' component={CharacterList} />
    </main>
  );
}
