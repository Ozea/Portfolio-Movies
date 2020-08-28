const displayTvShowDetails = element => {
  let id = element.nextSibling.nextSibling.value;
  CARDS_WRAPPER_COMPONENT.style.display = 'none';
  MOVIE_DETAILS_COMPONENT.style.display = 'none';
  TV_SHOW_DETAILS_COMPONENT.style.display = 'flex';
  getTvShowById(id);
}

const getTvShowById = id => {
  let TV_SHOW_BY_ID_URL = `${BASE_URL}tv/${id}?api_key=${token}`;

  axios.get(TV_SHOW_BY_ID_URL)
    .then(result => {
      if (result.data) {
        printTVShowDetails(result.data);
      }
    })
    .catch(err => console.error(err));
}

const printTVShowDetails = show => {
  let date = new Date(show.first_air_date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  TV_SHOW_DETAILS_COMPONENT.innerHTML = `
    <div class="movie-details-wrapper" style="background-image: url(${IMG_ORIGINAL_URL}${show.backdrop_path})">

      <div class="details-wrapper">
        <div class="poster" style="background-image: url(${IMG_BASE_POSTER_URL}${show.poster_path})"></div>

        <div class="details">
          <span class="date">
            ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}
          </span>

          <span class="title">${show.name} <span class="status">( ${show.status} )</span></span>

          <div class="runtime-wrapper">
            <span class="runtime">
              <i class="far fa-clock"></i>
              <span>${show.episode_run_time[0]} <span>min. / serie</span> </span>
            </span>
            <span class="seasons">
              <span>Seasons: ${show.seasons.length}</span>
            </span>
            <div class="votes-wrapper">
              <span class="average">${show.vote_average} / 10 <i class="fas fa-star"></i></span>
            </div>
          </div>
          
          <div class="genres">
            ${printSmallGenres(show.genres)}
          </div>

          <span class="description">${show.overview}</span>

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