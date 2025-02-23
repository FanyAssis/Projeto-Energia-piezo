const transicaoPagina = document.querySelector('.conteudo_main_transition');
const pontoDoScroll = 60;



window.addEventListener('scroll', () => {
        if(window.scrollY > pontoDoScroll){
        transicaoPagina.classList.add('visivel');
    }
     });




