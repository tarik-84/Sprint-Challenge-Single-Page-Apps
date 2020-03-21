import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  console.log(character)
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
         .then(response => {
           setCharacter(response)
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
      {character.map(char => (
        <CharacterCard key={char.id} name={char.name} status={char.status} species={char.species} gender={char.gender} />
        )
      )}
    </section>
  );
}
