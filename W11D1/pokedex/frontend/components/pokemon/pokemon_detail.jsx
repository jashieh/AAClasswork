import React from 'react';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.pokemonId);
  }

  render() {
    // debugger
    let pokeMoves = "";
    if (this.props.poke.moves) {
      this.props.poke.moves.map ( move => {
        pokeMoves += move + ", ";
      });
    }

    // let pokeItems = this.props.items.map(img)

    return(
      <div>
        <img src={this.props.poke.image_url} alt=""/>
        <h2>
          {this.props.poke.name}
        </h2>
        <ul>
          
          <label>Type: 
            {" " + this.props.poke.poke_type}
          </label>
          <br/>
          <label>Attack:
            {" " + this.props.poke.attack}
          </label>
          <br />
          <label>Defense:
            {" " + this.props.poke.defense}
          </label>
          <br />
          <label>Moves:
            {" " + pokeMoves.slice(0, pokeMoves.length - 2)}
          </label>
        </ul>

        <h3>Items</h3>
        <ul>
            {Object.keys(this.props.items).map( item => {
              return <li><img src={this.props.items[item].image_url} alt=""/></li>
            })}
        
        </ul>
      </div>
    );
  }
}