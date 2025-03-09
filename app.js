const transicaoPagina = document.querySelector('.conteudo_main_transition');
const pontoDoScroll = 30;



window.addEventListener('scroll', () => {
        if(window.scrollY > pontoDoScroll){
        transicaoPagina.classList.add('visivel');
    }
     });




