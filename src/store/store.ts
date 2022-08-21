import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const Store = createStore(rootReducer, applyMiddleware(thunk));
export type RootStore = ReturnType<typeof rootReducer>;

export default Store;
