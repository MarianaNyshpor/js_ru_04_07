import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterReducer from './filter'

export default combineReducers({
    counter: counterReducer,
    articles,
    filter: filterReducer
})