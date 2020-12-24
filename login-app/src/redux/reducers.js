import { combineReducers } from "redux";

const user = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.value;
        case "LOGOUT":
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({user});