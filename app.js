
const toc=document.querySelector('#toc'), hs=[...document.querySelectorAll('#doc h2,#doc h3,#doc h4')];
hs.forEach(h=>{const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;a.className='l'+h.tagName.substring(1);toc.appendChild(a)});
const links=[...toc.querySelectorAll('a')]; const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}})},{rootMargin:'-90px 0px -75%'});hs.forEach(h=>obs.observe(h));
document.querySelector('#menuBtn').onclick=()=>document.querySelector('#sidebar').classList.toggle('open');links.forEach(a=>a.onclick=()=>document.querySelector('#sidebar').classList.remove('open'));
const q=document.querySelector('#q');q.addEventListener('input',()=>{const term=q.value.trim().toLowerCase();document.querySelectorAll('#doc > *').forEach(el=>{const head=el.matches('h2,h3,h4');el.classList.toggle('search-hidden',term.length>2 && !head && !el.textContent.toLowerCase().includes(term))});});
