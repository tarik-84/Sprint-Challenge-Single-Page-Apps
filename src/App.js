import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import LocationsList from "./components/LocationsList.js";
import Episodelist from './components/EpisodeList'


export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path='/search' component={SearchForm} />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/Characters' component={CharacterList} />
      <Route exact path='/location' component={LocationsList} />
      <Route exact path='/episode' component={Episodelist} />
    </main>
  );
}
