import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";
import { Button, TextField } from '@material-ui/core';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");
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

  useEffect(()=>{
    Axios.get("https://rickandmortyapi.com/api/character/") 
    .then (response =>{
      const characters = response.data.results.filter(char => char.name.toLowerCase().includes(query.toLowerCase())
      );
      
      setCharacter (characters);
    })
    .catch(error => {
      console.error(error);
    });
  },[query]);
  
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <Link to= "/"><Button variant="outlined" color="primary" size="small" >Home</Button></Link>
      <form className='search'>
      <TextField label="Search" 
      id="name" type="text" name="textfield" placeholder="Search" value={query} onChange={handleInputChange}/>
      </form>
      {character.map(char => (
        <CharacterCard key={char.id} 
        image={char.image}
        name={char.name} 
        status={char.status} 
        species={char.species} 
        gender={char.gender} 
        />
        ))}
    </section>
  );
}
