const API_key = process.env.REACT_APP_TMDB_API_KEY;
console.log("Loaded TMDB API key:", API_key); // Add this line for debugging

const requests = {
  fetchTrending: `/trending/movie/day?api_key=${API_key}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_key}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchTopRatedMovie: `/tv/top_rated?api_key=${API_key}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
  fetchAdventuresMovies: `/discover/movie?api_key=${API_key}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_key}&with_genres=16`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_key}&with_genres=80`,
  fetchDocumentaries: `/discover/movie?api_key=${API_key}&with_genres=99`,
  fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`
};

export default requests;
