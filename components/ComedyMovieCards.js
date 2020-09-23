const COMEDY_MOVIE_ID = 35;
const COMEDY_MOVIES_URL = `${BASE_URL}discover/movie?api_key=${token}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=${COMEDY_MOVIE_ID}`;
const COMEDY_MOVIES_ELEMENT = document.getElementById('comedy');

axios.get(COMEDY_MOVIES_URL)
  .then(result => {
    if (result.data.results) {
      displayComedyMovieCards(result.data.results);
    }
  })
  .catch(err => console.error(err));

displayComedyMovieCards = items => {
  COMEDY_MOVIES_ELEMENT.innerHTML = '';
  let slicedItems = items.slice(0, 5);
  slicedItems.map(item => printCard(COMEDY_MOVIES_ELEMENT, item));
}