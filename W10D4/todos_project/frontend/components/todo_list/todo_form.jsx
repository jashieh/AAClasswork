import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      body: ""
    };
    // bind functions later here:
    // this.receiveTodo = this.props.receiveTodo;
    this.uniqueId = this.uniqueId.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({ body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ id: this.uniqueId() }, () => {
      this.props.receiveTodo(this.state);
      this.setState({title: "", body: "", id:0});
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input onChange={this.updateTitle} type="text" value={this.state.title}/>
        </label>
        <label>Body:
          <input onChange= {this.updateBody} type="text" value={this.state.body} />
        </label>
        <input type="submit" value="New Todo"/>
      </form>
    );
  }

}

export default TodoForm;

