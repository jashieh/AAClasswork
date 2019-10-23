import React from 'react';
import TabsItem from './tabs_item'

export default class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    console.log(props.panes[0]);
    this.state = {
      index: 0
    };
  }

  setTab(idx) {
    this.setState({index: idx});
  }

  getArticle() {
    console.log('test');
    console.log(this.props.panes[this.state.index].content);
    this.props.panes[this.state.index].content;
  }

  render() {
    return(
      <div className='outer-tabs'>
        <ul className="tabs">
          <button onClick={() => this.setTab(0)}>one</button>
          <button onClick={() => this.setTab(1)}>two</button>
          <button onClick={() => this.setTab(2)}>three</button>
        </ul>

        <div className="tabs-box">
          <article> {this.props.panes[this.state.index].content}</article>
          <TabsItem content={this.getArticle()} />
        </div>
      </div>
      // <TabsItem jobs={this.state.listings} />
    );
  }


}

{/* {props.map((obj) => 
          <TabsItem title={obj.title} 
            content={obj.content}
            index={obj.index} />)
        } */}