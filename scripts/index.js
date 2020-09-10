const IMG_BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const IMG_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original';
const TV_SHOW_DETAILS_COMPONENT = document.getElementById("tv-show-details");
const MOVIE_DETAILS_COMPONENT = document.getElementById("movie-details");
const BROWSE_CARDS_COMPONENT = document.getElementById("browse-cards");
const SEARCH_RESULTS_COMPONENT = document.getElementById("search-results");
const SIDEBAR_COMPONENT = document.getElementById("sidebar");
let BASE_URL = 'https://api.themoviedb.org/3/';
let token = 'e4fc8c7613a133ce29f2d207a9bdd7fc';
let exampleURL = `${BASE_URL}movie/550?api_key=${token}`;

const displayInitialBrowsePage = () => {
  BROWSE_CARDS_COMPONENT.style.display = 'block';
  TV_SHOW_DETAILS_COMPONENT.style.display = 'none';
  TV_SHOW_DETAILS_COMPONENT.innerHTML = '';
  MOVIE_DETAILS_COMPONENT.style.display = 'none';
  MOVIE_DETAILS_COMPONENT.innerHTML = '';
  SEARCH_RESULTS_COMPONENT.style.display = 'none';
  SEARCH_RESULTS_COMPONENT.innerHTML = '';
}

const squeezeSidebar = () => {
  SIDEBAR_COMPONENT.classList.toggle("squeezed");
}