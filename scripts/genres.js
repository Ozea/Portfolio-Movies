let GENRES_URL = `${BASE_URL}genre/movie/list?api_key=${token}&language=en-US`;
let genresElement = document.getElementById('genres');

axios.get(GENRES_URL)
  .then(result => {
    const { genres } = result.data;

    if (genres) {
      printGenres(genres);
    }
  })
  .catch(err => console.error(err));

const printGenres = genres => {
  genresElement.innerHTML = '';
  genres.map(genre => printGenre(genre));
}

const printGenre = genre => {
  // genresElement.innerHTML += `
  //   <div class="genre">
  //     <span class="name">${genre.name}</span>
  //     <img width="200" height="300" src='${genre.name === 'Action' ? 'media/Action.jpg' : ''}'
  //   </div>
  // `;
}