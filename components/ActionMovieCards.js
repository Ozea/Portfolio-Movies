const ACTION_MOVIE_ID = 28;
const ACTION_MOVIES_URL = `${BASE_URL}discover/movie?api_key=${token}&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=${ACTION_MOVIE_ID}`;
const ACTION_MOVIES_ELEMENT = document.getElementById('action');

axios.get(ACTION_MOVIES_URL)
  .then(result => {
    if (result.data.results) {
      displayActionMovieCards(result.data.results);
    }
  })
  .catch(err => console.error(err));

displayActionMovieCards = items => {
  ACTION_MOVIES_ELEMENT.innerHTML = '';
  let slicedItems = items.slice(0, 5);
  slicedItems.map(item => printCard(ACTION_MOVIES_ELEMENT, item));
}