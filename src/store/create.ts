import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './';

export const createStore = (middleware = []) => (
	createReduxStore(
		rootReducer,
		composeWithDevTools(
			applyMiddleware(
				...middleware
			)
		)
	)
);
