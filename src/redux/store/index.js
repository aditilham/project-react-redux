import { createStore } from 'redux'

import reducer from '../reducers/rootReducers'

const store = createStore(reducer)

export default store;