const TRENDING_MOVIES_ELEMENT = document.getElementById('trending-movies');

axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${token}`)
  .then(result => {
    if (result.data.results) {
      displayTrendingMovies(result.data.results);
    }
  })
  .catch(err => console.error(err));

displayTrendingMovies = items => {
  TRENDING_MOVIES_ELEMENT.innerHTML = '';
  let slicedItems = items.slice(0, 6);
  slicedItems.map(item => printCard(TRENDING_MOVIES_ELEMENT, item));
}