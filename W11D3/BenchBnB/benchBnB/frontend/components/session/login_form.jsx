import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Login</h2>
        <form>
          <label>Username:
              <input
              onChange={this.handleInput('username')}
              type="text"
              value={this.state.username} />
          </label>
        </form>

        <form>
          <label>Email:
              <input
              onChange={this.handleInput('email')}
              type="text"
              value={this.state.email} />
          </label>
        </form>

        <form>
          <label>Password:
              <input
              onChange={this.handleInput('password')}
              type="password"
              value={this.state.password} />
          </label>
        </form>

        <input onClick={this.handleSubmit} type="submit" />
      </div>
    );
  }
}