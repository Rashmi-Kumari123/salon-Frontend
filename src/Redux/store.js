import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk";
import salonReducer from "./salon/reducer";

const rootReducers=combineReducers({
    salon:salonReducer


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))