import * as types from './actionTypes';

// export const getMemberData = () => {
//     return dispatch => {
//         fetch(`http://localhost:3000/members`)
//             .then(res => res.json())
//             .then(json => dispatch({
//                 type: types.GET_MEMBER_DATA, payload: json
//         }));
//     }

// }

// export const filterByMembership = (memberData, type) => {
//     const filtered = memberData.filter((m) => m.subscription.name === type)
//     console.log(filtered)
// }

// export const sortMembersByPrice = (memberData, type) => {
//     if(type === "desc") {
//         memberData.sort((a,b) => {
//             return b.subscription.price.localeCompare(a.subscription.price)
//         });
//     } else if(type === "asc") {
//         memberData.sort((a,b) => {
//             return a.subscription.price.localeCompare(b.subscription.price)
//         });
//     }

//     console.log(memberData)
// }

export const getAverage = (memberData) => {
    let total = 0
    memberData.forEach(member => {
        total += parseFloat(member.subscription.price)
    });

    return total / memberData.length
}