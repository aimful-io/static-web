const observedVideos=document.querySelectorAll("[data-autoplay]"),observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.play():e.target.pause()})},{rootMargin:"0px",threshold:.8});observedVideos.forEach(e=>{observer.observe(e)});
//# sourceMappingURL=video-autoplay.min.js.map
