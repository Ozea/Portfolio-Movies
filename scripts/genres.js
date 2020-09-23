let GENRES_URL = `${BASE_URL}genre/movie/list?api_key=${token}&language=en-US`;
let genresElement = document.getElementById('genres');
const GLOBAL_GENRES = localStorage.getItem("genres");

if (!GLOBAL_GENRES) {
  axios.get(GENRES_URL)
    .then(result => {
      const { genres } = result.data;

      if (genres) {
        setGenresInLs(genres);
      }
    })
    .catch(err => console.error(err));
}

const setGenresInLs = genres => {
  let stringifiedGenresObject = JSON.stringify(genres);
  localStorage.setItem("genres", stringifiedGenresObject);
}

const printSmallGenres = genres => {
  let result = '';

  genres.map(genre => result += `<span onclick="fetchByGenreId(${genre.id})">${genre.name}</span>`);

  return result;
}