import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    memberData: {}
  }
  
  componentDidMount() {
    fetch(`http://localhost:3000/members`)
      .then(res => res.json())
      .then(json => this.setState({
        memberData: json
      }))
  }
  
  render() {
    return(
      <div>

      </div>
    )
  }
}

export default App;
