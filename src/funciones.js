function headerScroll(){
    const header = document.getElementById('fixedHeader');
    const originalHeight = 100; // Altura original del header
    const reducedHeight = 50;   // Altura cuando se hace scroll
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) { // Por ejemplo, cambiar cuando se haga scroll más de 50px
        header.classList.add ('bg-red-800','scale-75');
    
      } else {
        header.classList.remove  ('opacity-90','scale-75');
      }
    });
    

}