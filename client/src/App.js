import React, { Component } from 'react';
import Menu from './components/Menu';
import Display from './components/Display';
import { getAverage } from './actions/memberActions';
import './App.css';

class App extends Component {

  // state = {
  //   memberData: {}
  // }
  
  componentDidMount() {
    fetch(`http://localhost:3000/members`)
      .then(res => res.json())
      .then(json => this.setState({
        memberData: json,
        averagePrice: getAverage(json)
      }))
  }
  
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-5" align="center">

            <Menu data={this.state} />

          </div>

          <div className="col-5" align="center">

            <Display memberData={this.state}/>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
