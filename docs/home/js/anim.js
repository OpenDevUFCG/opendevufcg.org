// Alvo da animação que será identificado pelo data-anime
const alvo = document.querySelectorAll('[data-anime]');

//Classe que o elemento irá receber para que a animação aconteça
const animationClass = 'anima';

/* Verifica o tamanho da janela e adiciona a classe de animação
a partir de 3/4 da pagina
*/
function animeScroll(){
    const distTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    alvo.forEach(function(element){
        if((distTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

// Acionando a função para caso de browsers antigos ou bugs no js
animeScroll();

/* Se tiver ao menos uma chamada do alvo no html verifica o scroll do
usuario (para não iniciar em paginas sem animação).
*/
if(alvo.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}