import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    useNowPlayingMovies: null,
    videoTrailer: null,
    usePopularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.useNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.usePopularMovies = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addVideoTrailer, addPopularMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
