import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const configureStore = () => {
    const middleware = [thunk]
    const store = createStore(reducer, applyMiddleware(...middleware));
    return store;
}

export { configureStore }