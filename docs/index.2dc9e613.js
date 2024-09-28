const e=document.getElementById("searchInput"),t=document.getElementById("results");async function r(e){if(!e){alert("Please enter a search term.");return}try{let r=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${e}&api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13`,a=await fetch(r);if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);let n=await a.json();console.log(n);let l=n.response?.docs||[];!function(e){if(t.innerHTML="",0===e.length){t.innerHTML="<p>No articles found.</p>";return}e.forEach(e=>{let r=document.createElement("div");r.className="article";let a=e?.multimedia?.[0].url;r.innerHTML=`
            <a href="${e.web_url}" target="_blank">
            <img class="search-photo" src="${a}" alt="${e.headline.main}">
            <h2>${e.headline.main}</h2>
            <p>${e.snippet}</p></a>
        `,t.appendChild(r)}),t.scrollIntoView({behavior:"smooth"})}(l)}catch(e){console.error("Error fetching articles:",e.message),t.innerHTML="<p>Error fetching articles. Please try again later.</p>"}}document.getElementById("searchButton").addEventListener("click",()=>{r(e.value.trim())});
//# sourceMappingURL=index.2dc9e613.js.map
