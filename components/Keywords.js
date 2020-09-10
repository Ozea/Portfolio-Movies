const KEYWORDS = [
  'Avatar',
  'Avengers: Endgame',
  'Spider-Man: Far from Home',
  'Harry Potter',
  'Project Power',
  'The Boys',
  'Umbrella Academy',
  'Game of Thrones'
];

const renderKeywords = words => {
  KEYWORDS_COMPONENT.innerHTML = '';

  words.map(word => {
    KEYWORDS_COMPONENT.innerHTML += `
      <span onclick="searchByKeyword('${word}')">${word}</span>
    `;
  });
}

renderKeywords(KEYWORDS);