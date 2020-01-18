import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Menu from './components/Menu';
import Display from './components/Display';
import { getAverage } from './actions/memberActions';
import './App.css';

class App extends Component {

  state = {
    allMemberData: {},
    memberDataView: {},
    type: "All",
    averagePrice: null,
    receivedData: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/members`)
      .then(res => res.json())
      .then(json => this.setState({
        allMemberData: json,
        memberDataView: json,
        averagePrice: getAverage(json),
        receivedData: true
      }))
  }

  filterByMembership = (type) => {
    if(type === "All") {
      this.setState({
        memberDataView: this.state.allMemberData,
        type: "All"
      })
    } else {
      const filtered = this.state.allMemberData.filter((m) => m.subscription.name === type)
      this.setState({
        memberDataView: filtered,
        type: type
      })
    }
  }

  sortMembersByPrice = (type) => {
    if(type === "desc") {
      const sorted = this.state.memberDataView.sort((a,b) => {
            return b.subscription.price.localeCompare(a.subscription.price)
        });
        this.setState({
          memberDataView: sorted
        })

    } else if(type === "asc") {
      const sorted = this.state.memberDataView.sort((a,b) => {
            return a.subscription.price.localeCompare(b.subscription.price)
        });
        this.setState({
          memberDataView: sorted
        })
    }
  }
  
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-5" align="center">
              <Menu filterByMembership={this.filterByMembership} 
                  sortMembersByPrice={this.sortMembersByPrice}/>
          </div>

          <div className="col-5" align="center">

            <Display type={this.state.type} receivedData={this.state.receivedData} memberDataView={this.state.memberDataView}/>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
// export default connect(null, { getMemberData })(App)