import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
<<<<<<< HEAD
import filterReducer from './filter'

export default combineReducers({
    counter: counterReducer,
    articles,
    filter: filterReducer
=======
import filters from './filters'
import comments from './comments'

export default combineReducers({
    counter: counterReducer,
    articles, filters, comments
>>>>>>> upstream/master
})