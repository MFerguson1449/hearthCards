!function(){const e=document.querySelector("form.cardSearch"),c=(document.querySelector(".searchSubmit"),document.querySelector(".cardDisplay"));function n(e){console.log("Something went wrong!!"),console.log(e)}e.addEventListener("submit",(async function(t){t.preventDefault();const a=document.querySelector(".searchInput").value;console.log(`Looking for cards including ${a}...`),async function(t){e.submit.disabled=!0;const a=await async function(e){const c=await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${e}?collectible=1`,{method:"GET",headers:{"x-rapidapi-key":"7c1424e997msh4c2529173a18f3cp1b5d2ajsnc981c4104a9b","x-rapidapi-host":"omgvamp-hearthstone-v1.p.rapidapi.com"}});return await c.json().catch(n)}(t);e.submit.disabled=!1,function(e){const n="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/",t=e.map((e=>`<div class="card">\n            <img src="${n}${e.cardId}.png" alt="${e.name}" class="cardImg">\n        </div>`));c.innerHTML=t.join("")}(a),console.log(a)}(a)}))}();
//# sourceMappingURL=index.a66b7123.js.map