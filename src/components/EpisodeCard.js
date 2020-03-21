import React from "react";

export default function EpisodeCard(props) {
  return (
    <div className='episode-card'>
      <h2>Name:{props.name}</h2>
      <h3>Air_Date:{props.air_date}</h3>
      <h3>Episode:{props.episode}</h3>
    </div>
  )
}
