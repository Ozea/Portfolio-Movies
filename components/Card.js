printCard = (element, item) => {
  element.innerHTML += `
    <div class="card">
      <img src="${IMG_BASE_POSTER_URL + item.poster_path}" alt="${item.name}">
      <div class="front-card" onclick="${setOnClickEvent(item.media_type)}">
        <div class="card-title">${item.name || item.original_title}</div>
        <div class="description">${item.overview.length > 125 ? item.overview.slice(0, 130) + '...' : item.overview}</div>
        <div class="footer">
          <div class="votes">
            ${item.vote_average}*
          </div>
          <span class="favorite">
            <span>Watch later</span>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
              <path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"
                d="M19,20.557l-7-2.625l-6.999,2.625L5.01,3.999C5.01,3.45,5.46,3,6.01,3H18c0.552,0,1,0.448,1,1V20.557z" />
            </svg>
          </span>
        </div>
      </div>
      <input type="hidden" value="${item.id}" />
    </div>
  `;
}

setOnClickEvent = type => {
  if (type) {
    if (type === 'movie') {
      return 'displayMovieDetails(this)';
    } else {
      return 'displayTvShowDetails(this)';
    }
  } else {
    return 'displayMovieDetails(this)';
  }
}

printStars = votes => {
  let result = '';
  let flooredVotes = Math.floor(votes);

  for (let i = 0; i < 10; i += 2) {
    if (i >= flooredVotes) {
      result += `<i class="far fa-star"></i>`;
    } else {
      result += `<i class="fas fa-star"></i>`;
    }
  }

  return result;
}