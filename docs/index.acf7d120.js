const t=document.getElementById("latest-arts"),e=document.getElementById("asb-one"),a=async()=>{try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13");return await t.json()}catch(t){return alert("An error occured",t),[]}},r=a=>{t.innerHTML="",e.innerHTML="",(a.results||[]).forEach((a,r)=>{if(r>=9)return;let l=document.createElement("div"),s=a?.multimedia?.[0].url;if(0===r){l.setAttribute("class","art-one"),l.style.position="relative",l.style.overflow="hidden",l.innerHTML=`
      <img class="arts-photo1" src="${s}" alt="${a.title}">
      <div class="title-box">
        <h2 class="art-title"><a href="${a.url}" target="_blank">${a.title}</a></h2>
      `;let t=document.getElementById("asb-one");t.style.backgroundImage=`url('${s}')`,t.style.backgroundPosition="center",t.style.backgroundSize="cover",t.style.backgroundRepeat="no-repeat",e.appendChild(l)}else l.setAttribute("class","art-article"),l.innerHTML=`
      <a href="${a.url}" target="_blank"><img class="art-photo" src="${s}" alt="${a.title}">
      <h2>${a?.title}</h2>
      <p>${a?.abstract}</p></a>
      `,t.appendChild(l)})};(async()=>{r(await a())})();
//# sourceMappingURL=index.acf7d120.js.map
