import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);
    // console.log(episation)
    useEffect(()=> {
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
            console.log('res', response)
            setEpisodes(response.data.results)
        })
        .catch(error => {
            console.error(error);
          });
    }, []);

    return (
      <section className="episode-list">
      <Link to= "/"><button>Home</button></Link>
     {episodes.map(episode => (
       <EpisodeCard key={episode.id}
        name={episode.name}
        air_date={episode.air_date}
        episode={episode.episode}
         />
       )
     )}
   </section>
    );
}