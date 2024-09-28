const t=document.getElementById("movie-content");let e=0,n=[];const a=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13");return(await t.json()).results||[]}catch(t){return alert("An error occurred",t),[]}},l=()=>{t.innerHTML="",n.forEach(e=>{let n=document.createElement("div"),a=e?.multimedia?.[0].url;n.setAttribute("class","movie"),n.innerHTML=`
      <a href="${e.url}" target="_blank">
        <img class="movie-photo" src="${a}" alt="${e?.title}">
        <h2 class="movie-title">${e?.title}</h2>
        <p>${e?.abstract}</p>
      </a>
    `,t.appendChild(n)}),t.style.transform=`translateX(-${100*e}%)`};(async()=>{n=await a(),l()})(),document.getElementById("next").addEventListener("click",()=>{e=(e+1)%n.length,l()}),document.getElementById("prev").addEventListener("click",()=>{e=(e-1+n.length)%n.length,l()});
//# sourceMappingURL=index.84c48d3d.js.map
