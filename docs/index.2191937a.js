const t=document.getElementById("tech-content"),e=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13");return await t.json()}catch(t){return alert("An error occured",t),[]}},a=e=>{t.innerHTML="",(e.results||[]).forEach(e=>{let a=document.createElement("div"),c=e?.multimedia?.[0].url;a.setAttribute("class","tech"),a.innerHTML=`
    <a href="${e.url}" target="_blank">
    <img class="tech-photo" src="${c}" alt="${e?.title}">
    <h2 class="tech-title">${e?.title}</h2>
    <p>${e?.abstract}</p></a>
    `,t.appendChild(a)})};(async()=>{a(await e())})();
//# sourceMappingURL=index.2191937a.js.map
