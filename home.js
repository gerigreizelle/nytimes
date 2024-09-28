const API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13';

var dt = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
var formattedDate = dt.toLocaleString('en-US', options);
document.getElementById('date-time').innerHTML = formattedDate;



const TopNews = document.getElementById('top-stories');
const firstArticleContainer = document.getElementById('welcome-div');

const getTopNews = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (e) {
    alert('An error occurred', e);
    return [];
  }
};

const updateContainer = (data) => {
  TopNews.innerHTML = '';  
  firstArticleContainer.innerHTML = '';  

  (data.results || []).forEach((news, index) => {
    if (index >= 13) return;

    const newsContainer = document.createElement('div');
    const imageUrl = news?.multimedia?.[0]?.url; 

    if (index === 1) {
      newsContainer.setAttribute('class', 'first-article');
      newsContainer.style.position = 'relative';
      newsContainer.style.overflow = 'hidden';

      newsContainer.innerHTML = `
        <img class="home-photo" src="${imageUrl}" alt="${news.title}">
        <div class="info-box">
          <h2 class="open-text"><a href="${news.url}" target="_blank">${news?.title}</h2>
          <p class="open-description">${news?.abstract}</p></a>
      `;

      
      let welcome = document.getElementById('welcome-div');
      welcome.style.backgroundImage = `url('${imageUrl}')`;
      welcome.style.backgroundPosition = 'center'; 
      welcome.style.backgroundRepeat = 'no-repeat';
      welcome.style.backgroundSize = 'contain';

      firstArticleContainer.appendChild(newsContainer);
    } else {
      
      newsContainer.setAttribute('class', 'article');
      newsContainer.innerHTML = `
      <a href="${news.url}"><img class="article-photo" src="${imageUrl}" alt="${news.title}">
      <h2>${news?.title}</h2>
      <p>${news?.abstract}</p></a>
      `;

      TopNews.appendChild(newsContainer);
    }
  });
};

const updateSidebar = (data) => {
  sidebar.innerHTML = '';  
  const sidebarNews = data.results.slice(14, 21);
  

  sidebarNews.forEach((news) => {
    // if (index >= 3) return; 

    const sidebarItem = document.createElement('div');
    sidebarItem.setAttribute('class', 'sidebar-item');
    
    const imageUrl = news?.multimedia?.[0]?.url;

    sidebarItem.innerHTML = `
      <a href="${news.url}"><img class="sidebar-photo" src="${imageUrl}" alt="${news.title}">
      <h2 class="sb-text">${news?.title}</a></h2>
      <p>${news?.abstract}</p>
      <p>______________________________</p>
    `;

    sidebar.appendChild(sidebarItem);
  });
};

(async () => {
  const data = await getTopNews();
  updateContainer(data);
  updateSidebar(data)
})();



document.querySelector(".logo a").addEventListener("click", function() {
  const navbar = document.querySelector("nav");
  navbar.classList.add("fixed-bottom");
  navbar.classList.remove("fixed-top");
});


//Scrollbar
// window.addEventListener("DOMContentLoaded", () => {
  // const navbar = document.querySelector("nav");


  // window.addEventListener("scroll", function() {
    // if (window.scrollY > 100) {
      // navbar.classList.remove("fixed-bottom");
      // navbar.classList.add("fixed-top");
  // } else {
//       navbar.classList.add("fixed-bottom");
//       navbar.classList.remove("fixed-top");
//   }
//   });
// });