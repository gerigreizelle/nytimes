const API_URL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13';

const LatestArts = document.getElementById('latest-arts');
const firstArtContainer = document.getElementById('asb-one');

const getLatestArts = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (e) {
    alert('An error occured', e);
    return [];
  }
};

const updateContainer = (data) => {
  LatestArts.innerHTML = '';
  firstArtContainer.innerHTML = '';

  (data.results || []).forEach((arts, index) => {
    if (index >= 9) return;

    const artsContainer = document.createElement('div');
    const imageUrl = arts?.multimedia?.[0].url;

    if (index === 0) {
      artsContainer.setAttribute('class', 'art-one');
      artsContainer.style.position = 'relative';
      artsContainer.style.overflow = 'hidden';
  

      artsContainer.innerHTML = `
      <img class="arts-photo1" src="${imageUrl}" alt="${arts.title}">
      <div class="title-box">
        <h2 class="art-title"><a href="${arts.url}" target="_blank">${arts.title}</a></h2>
      `;

      let art = document.getElementById('asb-one');
      art.style.backgroundImage = `url('${imageUrl}')`;
      art.style.backgroundPosition = 'center';
      art.style.backgroundSize = 'cover';
      art.style.backgroundRepeat = 'no-repeat';

      firstArtContainer.appendChild(artsContainer);
    } else {
      artsContainer.setAttribute('class', 'art-article');

      artsContainer.innerHTML =  `
      <a href="${arts.url}" target="_blank"><img class="art-photo" src="${imageUrl}" alt="${arts.title}">
      <h2>${arts?.title}</h2>
      <p>${arts?.abstract}</p></a>
      `;

      LatestArts.appendChild(artsContainer);
    }
  });
};
  

(async () => {
  const data = await getLatestArts();
  updateContainer(data);
})();
