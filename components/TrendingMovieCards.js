const IMG_BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const TRENDING_ELEMENT = document.getElementById('trending');

axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${token}`)
  .then(result => {
    if (result.data.results) {
      displayTrending(result.data.results);
    }
  })
  .catch(err => console.error(err));

displayTrending = items => {
  TRENDING_ELEMENT.innerHTML = '';
  let slicedItems = items.slice(0, 6);
  slicedItems.map(item => printCard(TRENDING_ELEMENT, item));
}