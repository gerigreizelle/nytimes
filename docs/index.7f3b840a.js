const t=document.getElementById("book-reviews"),e=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13");if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){return alert("An error occurred: "+t.message),{}}},r=e=>{t.innerHTML="",(e.results?.books||[]).forEach(e=>{let r=document.createElement("div"),o=e?.book_image;r.setAttribute("class","books"),r.innerHTML=`
    <a href="${e.url}" target="_blank">
    <img class="book-cover" src="${o}" alt="${e?.title}">
    <h2>${e?.title}</h2></a>
    `,t.appendChild(r)})};(async()=>{r(await e())})();
//# sourceMappingURL=index.7f3b840a.js.map
