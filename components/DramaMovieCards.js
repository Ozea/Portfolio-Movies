const DRAMA_MOVIE_ID = 18;
const DRAMA_MOVIES_URL = `${BASE_URL}discover/movie?api_key=${token}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=${DRAMA_MOVIE_ID}`;
const DRAMA_MOVIES_ELEMENT = document.getElementById('drama');

axios.get(DRAMA_MOVIES_URL)
  .then(result => {
    if (result.data.results) {
      displayDramaMovieCards(result.data.results);
    }
  })
  .catch(err => console.error(err));

displayDramaMovieCards = items => {
  DRAMA_MOVIES_ELEMENT.innerHTML = '';
  let slicedItems = items.slice(0, 5);
  slicedItems.map(item => printCard(DRAMA_MOVIES_ELEMENT, item));
}