import React from "react";

export default class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    // if (property === 'move1') {
    //   return (e) => this.setState({ moves: [e.target.value,0] });
    // }
    // if (property === 'move2') {
    //   return (e) => this.setState({ moves: [e.target.value, 0] });
    // }
    return (e) => this.setState({ [property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const poke = Object.assign({},this.state);
    console.log(poke);
    this.props.newPoke(poke);
  }

  render () {
    // console.log(this.state);
    return (
      <form>
        <label>Name 
          <input onChange={this.update('name')} type="text" value={this.state.name}/>
        </label>
        <label>Image Url
          <input onChange={this.update('image_url')} type="text" value={this.state.image_url} />
        </label>
        <label>Type
          <input onChange={this.update('poke_type')} type="text" value={this.state.poke_type} />
        </label>
        <label>Attack
          <input onChange={this.update('attack')} type="text" value={this.state.attack} />
        </label>
        <label>Defense
          <input onChange={this.update('defense')} type="text" value={this.state.defense} />
        </label>
        {/* <label>Move 1
          <input onChange={this.update('defense')} type="text" value={this.state.defense} />
        </label>
        <label>Move 2
          <input onChange={this.update('defense')} type="text" value={this.state.defense} />
        </label> */}
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}