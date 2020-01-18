import React from 'react';

const Display = (props) => {
    let members;
    let subscriptionLevel
    if(props.receivedData) {
        members = props.memberDataView.map((m => <li key={m.id}>{m.name}</li>))
        subscriptionLevel = props.type
    }
    return (
        <ul className="display">
            <h1>{subscriptionLevel}</h1>
            {members}
        </ul>
    )
}

export default Display;