export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ process.env.REACT_APP_TMDB_API_KEY,
  },
};
export const IMAGE_CDN_PATH = "https://image.tmdb.org/t/p/w300/";
export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
