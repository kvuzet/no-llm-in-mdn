setTimeout(() => {
  (function(){
    const banner = document.querySelector(".top-banner");
    const banner_links = banner.querySelector("a[href*='ai-help']");
    if (banner_links !== null) banner.remove();
  })();

  (function(){
    const bad_links = document.querySelectorAll('a[href*="ai-help"]');
    Array.from(bad_links).forEach((element) => {
      console.log(element);
      element.parentNode.remove();
    }); 
  })();
}, 1);
