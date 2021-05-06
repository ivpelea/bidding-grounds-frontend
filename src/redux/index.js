import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

export const persistedReducer = persistReducer(persistConfig, combineReducers({
    user: userReducer,
}));

export const store = createStore(
    persistedReducer,
    window.devToolsExtension && window.devToolsExtension()
);

export const persistor = persistStore(store);