import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducer'

// add logger in dev environment
const logger = createLogger({
	predicate: (getState, action) => __DEV__, // && __CLIENT__
	collapsed: () => __SERVER__
})

// create store for reducer
const composedStore = compose(
	applyMiddleware(thunk, logger)
)(createStore)

const configureStore = (initialState) => {
	const store = composedStore(reducer, initialState)
	
	if (module.hot) {
		// RS
		module.hot.accept('./reducer', () => {
			const nextReducer = require('./reducer').default
			store.replaceReducer(nextReducer)
		})
	}

	return store
}

export default configureStore
