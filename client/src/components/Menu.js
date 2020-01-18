import React from 'react';
import '../App.css';

const Menu = (props) => {
    return (
        <div className="container">
            <div className="sort-dropdown">
                <button className="sort-dropbtn">Sort Members By Price</button>
                <div className="sort-dropdown-content">
                    <a href="#" id="asc" onClick={ (e) => props.sortMembersByPrice(e.target.id)}>Ascending</a>
                    <a href="#" id="desc" onClick={ (e) => props.sortMembersByPrice(e.target.id)}>Descending</a>
                    </div>
                </div>
                
                <div className="filter-dropdown">
                    <button className="filter-dropbtn">Filter By Membership</button>
                    <div className="filter-dropdown-content">
                        <a href="#" id="All" onClick={ (e) => props.filterByMembership(e.target.id) }>All</a>
                        <a href="#" id="Silver" onClick={ (e) => props.filterByMembership(e.target.id) }>Silver</a>
                        <a href="#" id="Gold" onClick={ (e) => props.filterByMembership(e.target.id) }>Gold</a>
                        <a href="#" id="Platinum" onClick={ (e) => props.filterByMembership(e.target.id) }>Platinum</a>
                    </div>
                </div>
             </div>
    )
}

export default Menu