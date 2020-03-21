import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  console.log(character)
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
         .then(response => {
           setCharacter(response.data.results)
           console.log('tarik', response)
         }) 
         .catch(error => {
          console.error(error);
        });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
       <Link to= "/"><button>Home</button></Link>
       <Link to="/Search"><button>Search
          </button></Link>
      {character.map(char => (
        <CharacterCard key={char.id} name={char.name} status={char.status} species={char.species} gender={char.gender} />
        )
      )}
    </section>
  );
}
