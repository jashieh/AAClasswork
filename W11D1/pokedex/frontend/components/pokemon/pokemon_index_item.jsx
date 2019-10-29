import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  let url = `/pokemon/${props.pokemon.id}`;
  return (
    <li>
      <Link to= {url} >
        {props.pokemon.name}
        <img src={props.pokemon.image_url} alt="poke image"/>
      </Link>
    </li>
  )
};

export default PokemonIndexItem;