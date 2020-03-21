import React from "react";


export default function CharacterCard(props) {
  return (
      <div className='card'>
        <img src={props.image} alt={props.name}/>
        <h2>Name: {props.name}</h2>
        <h3>Status: {props.status}</h3>
        <h3>Species: {props.species}</h3>
        <h3>Gender: {props.gender}</h3>
      </div>
  );
}
