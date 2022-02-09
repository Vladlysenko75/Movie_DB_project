import {combineReducers, configureStore} from '@reduxjs/toolkit';

import moviesReducer from "./slices/movies.slice";
import genresReducer from "./slices/genres.slice";

const rootReducer = combineReducers({moviesReducer, genresReducer})

const store = configureStore({
    reducer: rootReducer
})

export default store;