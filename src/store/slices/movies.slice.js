import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

export const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopularMovies',
    async (_, {rejectWithValue}) => {
        try {
            return await movieService.getPopularMovies()
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const getMoviesNowPlaying = createAsyncThunk(
    'moviesSlice/getMoviesNowPlaying',
    async (_, {rejectedWithValue}) => {
        try {
            return await movieService.getMoviesPlayingNow()
        } catch (e) {
            rejectedWithValue(e.message)
        }
    }
)

export const getTopRatedMovies = createAsyncThunk(
    'movieSlice/getTopRatedMovies',
    async (_, {rejectedWithValue}) => {
        try {
            return await movieService.getTopRatedMovies()
        } catch (e) {
            rejectedWithValue(e.message)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        popularMovies: [],
        nowPlayingMovies:[],
        topRatedMovies: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getPopularMovies.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getPopularMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.popularMovies = action.payload;
        },
        [getPopularMovies.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [getMoviesNowPlaying.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getMoviesNowPlaying.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.nowPlayingMovies = action.payload;
        },
        [getMoviesNowPlaying.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [getTopRatedMovies.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getTopRatedMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.topRatedMovies = action.payload;
        },
        [getTopRatedMovies.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        }
    }
})

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;