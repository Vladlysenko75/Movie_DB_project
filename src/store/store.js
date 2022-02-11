import {combineReducers, configureStore} from '@reduxjs/toolkit';

import moviesReducer from "./slices/movies.slice";
import genresReducer from "./slices/genres.slice";

const rootReducer = combineReducers({moviesReducer, genresReducer})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['genreSlice/getGenreList/fulfilled']
            },
        })
    ]
})

export default store;