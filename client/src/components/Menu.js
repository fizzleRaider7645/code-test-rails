import React from 'react';
import { filterByMembership, sortMembersByPrice } from '../actions/memberActions';
import '../App.css';

const Menu = (props) => {
    return (
        <div className="menu">
             <div className="dropdown">
                 <button className="dropbtn">Sort By Price</button>
                 <div className="dropdown-content">
                     <a href="#" id="asc" onClick={ (e) => sortMembersByPrice(props.data.memberData, e.target.id)}>Ascending</a>
                     <a href="#" id="desc" onClick={ (e) => sortMembersByPrice(props.data.memberData, e.target.id)}>Descending</a>
                </div>
                
                <div className="dropdown">
                    <button className="dropbtn">Filter By Membership</button>
                    <div className="dropdown-content">
                        <a href="#" id="Silver" onClick={ (e) => filterByMembership(props.data.memberData, e.target.id) }>Silver</a>
                        <a href="#" id="Gold" onClick={ (e) => filterByMembership(props.data.memberData, e.target.id) }>Gold</a>
                        <a href="#" id="Platinum" onClick={ (e) => filterByMembership(props.data.memberData, e.target.id) }>Platinum</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu