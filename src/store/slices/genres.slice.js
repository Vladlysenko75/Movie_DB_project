import {createSlice} from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        movies: []
    },
    reducers: {},
    extraReducers: {}
})

const genresReducer = genresSlice.reducer;

export default genresReducer;