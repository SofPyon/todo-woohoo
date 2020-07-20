import { createStore, combineReducers, Store, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AsyncStorage } from 'react-native';
import { persistReducer, persistStore } from 'redux-persist';
import todosReducer from './reducers/todos';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todos'],
};

const rootReducer = combineReducers({
  todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore((store as any) as Store<any, AnyAction>);
export default store;
