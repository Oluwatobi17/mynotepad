import { combineReducers, createStore } from "redux";

import usersReducer from "./usersReducer";
import notesReducer from "./notesReducer";


const reducer = combineReducers({
    users: usersReducer,
    notes: notesReducer
});

const store = createStore(reducer);

export default store;