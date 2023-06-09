import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
const rootReducer = combineReducers({
    counter: counterReducer
})
type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
type AppStoreType = typeof store