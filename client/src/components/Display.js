import React from 'react';

const Display = (props) => {
    let members;
    let subscriptionLevel;
    if(props.receivedData) {
        subscriptionLevel = props.type
        members = props.memberDataView.map((m => <li onClick={ () => props.setMember(m)} data-toggle="tooltip" title="Click for User Details" key={m.id}>{m.name} {subscriptionLevel === "All" ? `- ${m.subscription.name}` : "" }</li>))
    }
    return (
        <div>
            <ul className="display">
                <h1>{subscriptionLevel}</h1>
                {members}
            </ul>
        </div>
    )
}

export default Display;