import {combineReducers, createStore} from 'redux'
import StudentsReducer from '../reducers/StudentsReducer'





const rootReducer = combineReducers({
    StudentsReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);