import { createStore } from "redux";

export const ACTION_NAMES = {
    INCREMENT : 'INCREMENT',
}

function reducer(state = {count: 0, other: 5}, action) {
    switch (action.type) {
        case ACTION_NAMES.INCREMENT:
            return {...state, count: state.count + 1};
        default:
            return state;
    }}

export const store = createStore(reducer);