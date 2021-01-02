import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/") 
  .then (response =>{
    const characters = response.data.results.filter(char => char.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setData (characters);
  })
  .catch(error => {
    console.error(error);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
 
  return (
    <section className="search-form">
      <div >
    <form > 
      <input
      id="name" type="text" name="textfield" placeholder="Search" value={query} onChange={handleInputChange}/>



    <Link to="/"><button>Home
          </button></Link>
    </form>

    {data.map(char => {
  return(<CharacterCard key={char.id} 
    image={char.image}
    name={char.name} 
    species ={char.species} 
    status={char.status}
    />)
}
)}

</div>
    </section>
  );
}

