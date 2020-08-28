const IMG_BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const IMG_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original';
const CARDS_WRAPPER_COMPONENT = document.getElementById("cards-wrapper");
const TV_SHOW_DETAILS_COMPONENT = document.getElementById("tv-show-details");
const MOVIE_DETAILS_COMPONENT = document.getElementById("movie-details");
let BASE_URL = 'https://api.themoviedb.org/3/';
let token = 'e4fc8c7613a133ce29f2d207a9bdd7fc';
let exampleURL = `${BASE_URL}movie/550?api_key=${token}`;

const displayInitialBrowsePage = () => {
  CARDS_WRAPPER_COMPONENT.style.display = 'block';
  TV_SHOW_DETAILS_COMPONENT.style.display = 'none';
  TV_SHOW_DETAILS_COMPONENT.innerHTML = '';
  MOVIE_DETAILS_COMPONENT.style.display = 'none';
  MOVIE_DETAILS_COMPONENT.innerHTML = '';
}