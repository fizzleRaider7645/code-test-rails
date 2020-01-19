import React from 'react';

const UserDetails = (props) => {
    let member;

    if(props.member) {
        member = props.member
    }
    return (
        <div className="user-details">
            <h1>{member.name}</h1>
            <h3>{member.email}</h3>
            <h3>{member.phone}</h3>
            <h3>{member.subscription ? `Subscription Level: ${member.subscription.name}` : ""}</h3>
            <h3>{member.subscription ? `Price: $${member.subscription.price}` : ""}</h3>
        </div>
    )
}

export default UserDetails;