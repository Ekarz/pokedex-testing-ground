import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
