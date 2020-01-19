import React, { Component } from 'react';
import Menu from './components/Menu';
import Display from './components/Display';
import UserDetails from './components/UserDetails';
import { getAverage } from './actions/memberActions';
import './App.css';

class App extends Component {

  state = {
    allMemberData: {},
    memberDataView: {},
    type: "All",
    averagePrice: null,
    member: {},
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

  setMember = (member) => {
    this.setState({
      member: member
    })
  }

  filterByMembership = (type) => {
    if(type === "All") {
      this.setState({
        memberDataView: this.state.allMemberData,
        type: "All",
        member: {}
      })
    } else {
      const filtered = this.state.allMemberData.filter((m) => m.subscription.name === type)
      this.setState({
        memberDataView: filtered,
        type: type,
        member: {}
      })
    }
  }

  sortMembersByPrice = (type) => {
    if(type === "desc") {
      const sorted = this.state.memberDataView.sort((a,b) => {
            return b.subscription.price.localeCompare(a.subscription.price)
        });
        this.setState({
          memberDataView: sorted,
          member: {}
        })

    } else if(type === "asc") {
      const sorted = this.state.memberDataView.sort((a,b) => {
            return a.subscription.price.localeCompare(b.subscription.price)
        });
        this.setState({
          memberDataView: sorted,
          member: {}
        })
    }
  }
  
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-5" align="center">
            <h1> Member Breakdown </h1>
            <div>Average Price: ${this.state.averagePrice ? this.state.averagePrice : ""}</div>
              <Menu filterByMembership={this.filterByMembership} 
                    sortMembersByPrice={this.sortMembersByPrice}/>
          </div>

          <div className="col-5" align="center">

            <Display averagePrice={this.state.averagePrice} 
                     type={this.state.type} 
                     receivedData={this.state.receivedData} 
                     memberDataView={this.state.memberDataView}
                     setMember={this.setMember}/>

          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <UserDetails member={this.state.member}/>
            </div>
        </div>
      </div>
    )
  }
}

export default App;