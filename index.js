import{a as u,S as f,i as n}from"./assets/vendor-hdXJlIEV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const p="52498394-fe2478c11712f835aec8edf8d",m="https://pixabay.com/api/";async function y(a){return(await u.get(m,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const o=a.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>${e.likes}</p>
          <p>${e.views}</p>
          <p>${e.comments}</p>
          <p>⬇${e.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function d(){l.classList.add("hidden")}const b=document.querySelector(".form");d();b.addEventListener("submit",async a=>{a.preventDefault();const o=a.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Attention",message:"Type word for search"});return}L(),w();try{const e=await y(o);!e||!e.hits||e.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(e.hits)}catch(e){console.error("Download Error:",e),n.error({title:"Error",message:"Something went wrong"})}finally{d()}});
//# sourceMappingURL=index.js.map
