import React from "react";

export default function LocationCard(props) {
  return (
    <div className='location-card'>
      <h2>Name:{props.name}</h2>
      <h3>Type:{props.type}</h3>
      <h3>dimension:{props.dimension}</h3>
    </div>
  )
}
