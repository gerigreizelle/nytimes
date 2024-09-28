var e=new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});document.getElementById("date-time").innerHTML=e;const t=document.getElementById("top-stories"),i=document.getElementById("welcome-div"),a=async()=>{try{let e=await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=lFll1hxO1A2ykN5zhX5cNiMo4GyqdT13");return await e.json()}catch(e){return alert("An error occurred",e),[]}},r=e=>{t.innerHTML="",i.innerHTML="",(e.results||[]).forEach((e,a)=>{if(a>=13)return;let r=document.createElement("div"),l=e?.multimedia?.[0]?.url;if(1===a){r.setAttribute("class","first-article"),r.style.position="relative",r.style.overflow="hidden",r.innerHTML=`
        <img class="home-photo" src="${l}" alt="${e.title}">
        <div class="info-box">
          <h2 class="open-text"><a href="${e.url}" target="_blank">${e?.title}</h2>
          <p class="open-description">${e?.abstract}</p></a>
      `;let t=document.getElementById("welcome-div");t.style.backgroundImage=`url('${l}')`,t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="contain",i.appendChild(r)}else r.setAttribute("class","article"),r.innerHTML=`
      <a href="${e.url}"><img class="article-photo" src="${l}" alt="${e.title}">
      <h2>${e?.title}</h2>
      <p>${e?.abstract}</p></a>
      `,t.appendChild(r)})},l=e=>{sidebar.innerHTML="",e.results.slice(14,21).forEach(e=>{let t=document.createElement("div");t.setAttribute("class","sidebar-item");let i=e?.multimedia?.[0]?.url;t.innerHTML=`
      <a href="${e.url}"><img class="sidebar-photo" src="${i}" alt="${e.title}">
      <h2 class="sb-text">${e?.title}</a></h2>
      <p>${e?.abstract}</p>
      <p>______________________________</p>
    `,sidebar.appendChild(t)})};(async()=>{let e=await a();r(e),l(e)})(),document.querySelector(".logo a").addEventListener("click",function(){let e=document.querySelector("nav");e.classList.add("fixed-bottom"),e.classList.remove("fixed-top")});
//# sourceMappingURL=index.af86aafe.js.map
