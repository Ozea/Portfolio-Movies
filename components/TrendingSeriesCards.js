const TRENDING_SERIES_ELEMENT = document.getElementById('trending-series');

axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${token}`)
  .then(result => {
    if (result.data.results) {
      displayTrendingSeries(result.data.results);
    }
  })
  .catch(err => console.error(err));

displayTrendingSeries = items => {
  TRENDING_SERIES_ELEMENT.innerHTML = '';
  let slicedItems = items.slice(0, 6);
  slicedItems.map(item => printCard(TRENDING_SERIES_ELEMENT, item));
}