const displayMovieDetails = element => {
  let id = element.nextSibling.nextSibling.value;
  BROWSE_CARDS_COMPONENT.style.display = 'none';
  SEARCH_RESULTS_COMPONENT.style.display = 'none';
  TV_SHOW_DETAILS_COMPONENT.style.display = 'none';
  MOVIE_DETAILS_COMPONENT.style.display = 'flex';
  getMovieById(id);
}

const getMovieById = id => {
  let MOVIE_BY_ID_URL = `${BASE_URL}movie/${id}?api_key=${token}`;

  axios.get(MOVIE_BY_ID_URL)
    .then(result => {
      if (result.data) {
        printMovieDetails(result.data);
      }
    })
    .catch(err => console.error(err));
}

const printMovieDetails = movie => {
  let date = new Date(movie.release_date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  MOVIE_DETAILS_COMPONENT.innerHTML = `
    <div class="movie-details-wrapper" style="background-image: url(${IMG_ORIGINAL_URL}${movie.backdrop_path})">

      <div class="details-wrapper">
        <div class="poster" style="background-image: url(${IMG_BASE_POSTER_URL}${movie.poster_path})"></div>

        <div class="details">
          <span class="date">
            ${date.getDate()} ${months[date.getMonth() - 1]} ${date.getFullYear()}
          </span>

          <span class="title">${movie.title}</span>

          <span class="tagline">"${movie.tagline}"</span>

          <div class="runtime-wrapper">
            <span class="runtime">
              <i class="far fa-clock"></i>
              <span>${movie.runtime} <span>min.</span> </span>
            </span>
            <div class="votes-wrapper">
              <span class="average">${movie.vote_average} / 10 <i class="fas fa-star"></i></span>
            </div>
          </div>
          
          <div class="genres">
            ${printSmallGenres(movie.genres)}
          </div>

          <span class="description">${movie.overview}</span>

          <span class="footer">
            <span class="watch-trailer">
              <i class="fas fa-play"></i>
              Watch Trailer
            </span>
          </span>
        </div>
      </div>

      <div class="overlay"></div>

      <span class="back-to-browse" onclick="displayInitialBrowsePage()">
        <i class="fas fa-arrow-left"></i>
        &nbsp; Back to browse
      </span>
      
    </div>
  `;
}