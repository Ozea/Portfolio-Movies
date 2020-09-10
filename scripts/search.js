const SEARCH_URL = 'search/multi';
const FORM_COMPONENT = document.querySelector('nav form');

const search = query => {
  BROWSE_CARDS_COMPONENT.style.display = 'none';
  TV_SHOW_DETAILS_COMPONENT.style.display = 'none';
  TV_SHOW_DETAILS_COMPONENT.innerHTML = '';
  MOVIE_DETAILS_COMPONENT.style.display = 'none';
  MOVIE_DETAILS_COMPONENT.innerHTML = '';
  SEARCH_RESULTS_COMPONENT.style.display = 'flex';
  SEARCH_RESULTS_COMPONENT.innerHTML = '';
  console.log('searcg');

  axios.get(`${BASE_URL}${SEARCH_URL}?api_key=${token}&query=${query}`)
    .then(result => {
      if (result) {
        renderResults(result.data.results);
      }
    })
}

const renderResults = data => {
  data.map(item => printCard(SEARCH_RESULTS_COMPONENT, item));
}

FORM_COMPONENT.addEventListener("submit", e => {
  e.preventDefault();
  let inputValue = e.target[0].value;

  if (inputValue) {
    search(inputValue);
  }
});