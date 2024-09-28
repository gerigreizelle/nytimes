const API_URL = 'https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13';

const LatestMovies = document.getElementById('movie-content');
let currentIndex = 0;
let movies = [];

const getLatestMovies = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.results || [];
  } catch (e) {
    alert('An error occurred', e);
    return [];
  }
};

const updateContainer = () => {
  LatestMovies.innerHTML = '';
  movies.forEach((movie) => {
    const movieContainer = document.createElement('div');
    const imageUrl = movie?.multimedia?.[0].url;
    movieContainer.setAttribute('class', 'movie');
    movieContainer.innerHTML = `
      <a href="${movie.url}" target="_blank">
        <img class="movie-photo" src="${imageUrl}" alt="${movie?.title}">
        <h2 class="movie-title">${movie?.title}</h2>
        <p>${movie?.abstract}</p>
      </a>
    `;
    LatestMovies.appendChild(movieContainer);
  });
  LatestMovies.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const showNext = () => {
  currentIndex = (currentIndex + 1) % movies.length;
  updateContainer();
};

const showPrev = () => {
  currentIndex = (currentIndex - 1 + movies.length) % movies.length;
  updateContainer();
};

(async () => {
  movies = await getLatestMovies();
  updateContainer();
})();

document.getElementById('next').addEventListener('click', showNext);
document.getElementById('prev').addEventListener('click', showPrev);
