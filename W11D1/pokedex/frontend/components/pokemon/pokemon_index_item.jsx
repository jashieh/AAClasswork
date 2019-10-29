import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  let url = `/pokemon/${props.poke.id}`;
  return (
    <li>
      <Link to={url}>
        {props.poke.name}
        
        <img src={props.poke.image_url} alt="poke image"/>
      </Link>
    </li>
  )
};

export default PokemonIndexItem;