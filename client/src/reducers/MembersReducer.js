import * as types from '../actions/actionTypes'

const initial = { 
    memberData: {},
    averagePrice: null
}

export default (state = initial, action) => {
    switch(action.type) {
        case types.GET_MEMBER_DATA:
            debugger
        return;
// return {...state, receivedIndexResults: true, indexResults: action.payload};
// case types.GET_BREWERY_BY_ID:
// return {...state, receivedShowResults: true, showResult: action.payload};
// case types.GET_FAVORITE_BREWERIES:
// return {...state, receivedIndexResults: true, receivedShowResults: false, indexResults: action.payload};
    default:
        return state;
    }  
}