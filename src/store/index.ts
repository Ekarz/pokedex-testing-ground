import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
