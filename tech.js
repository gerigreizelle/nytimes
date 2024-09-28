const API_URL = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13';

const Technologies = document.getElementById('tech-content');

const getTechnologies = async () => {
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
  Technologies.innerHTML = '';
  (data.results || []).forEach((techs) => {

    const techContainer = document.createElement('div');
    const imageUrl = techs?.multimedia?.[0].url;
    techContainer.setAttribute('class', 'tech');

    techContainer.innerHTML = `
    <a href="${techs.url}" target="_blank">
    <img class="tech-photo" src="${imageUrl}" alt="${techs?.title}">
    <h2 class="tech-title">${techs?.title}</h2>
    <p>${techs?.abstract}</p></a>
    `;

    Technologies.appendChild(techContainer);
  });
};

(async () => {
  const data = await getTechnologies();
  updateContainer(data);
})();
