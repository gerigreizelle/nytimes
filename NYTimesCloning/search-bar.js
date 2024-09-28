const apiKey = 'lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13'; 

const searchBar = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const searchButton = document.getElementById('searchButton');


async function fetchArticles(query) {
    if (!query) {
        alert("Please enter a search term."); 
        return;
    }
    
    try {
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); 
        const articles = data.response?.docs || [];
        displayResults(articles);
    } catch (error) {
        console.error('Error fetching articles:', error.message);
        resultsDiv.innerHTML = '<p>Error fetching articles. Please try again later.</p>';
    }
}

function displayResults(articles) {
    resultsDiv.innerHTML = ''; 
    if (articles.length === 0) {
        resultsDiv.innerHTML = '<p>No articles found.</p>';
        return;
    }
    
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';

        const imageUrl = article?.multimedia?.[0].url;

        articleDiv.innerHTML = `
            <a href="${article.web_url}" target="_blank">
            <img class="search-photo" src="${imageUrl}" alt="${article.headline.main}">
            <h2>${article.headline.main}</h2>
            <p>${article.snippet}</p></a>
        `;
        resultsDiv.appendChild(articleDiv);
    });

    
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}


searchButton.addEventListener('click', () => {
    const query = searchBar.value.trim();
    fetchArticles(query);
});
