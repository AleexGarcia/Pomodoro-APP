botaoOpenSettings = document.querySelector("#botao");
botaoCloseSettings = document.querySelector('#settings-close');
settings = document.querySelector("#settings");
botaoOpenSettings.addEventListener('click', e => {
    settings.classList.remove('oculto');
})
botaoCloseSettings.addEventListener('click', e => {
    settings.classList.add('oculto');
})

settingsMinutes = document.querySelector("#settings__minutes");

settingsMinutes.addEventListener("click", e => {
    let input = e.target.parentNode.parentElement.firstElementChild;

    if (e.target.dataset.operador === '+') {
        input.value = parseInt(input.value) + 1;
    } else if (e.target.dataset.operador === '-') {
        if (input.value != 0) {
            input.value = parseInt(input.value) - 1;
        }
    }

})
var fonte = '';

function mudaFonte(fonteEscolhida){
    let html = document.querySelector('html')
    html.classList.replace(html.classList[0], fonteEscolhida);
    
}

fontUm = document.querySelector('#font-label');
fontDois = document.querySelector('#font2-label');
fontTres = document.querySelector('#font3-label');

fontUm.addEventListener('click', () => {
    fontUm.classList.add('active');
    fontDois.classList.remove('active');
    fontTres.classList.remove('active');
    fonte = 'font'
})
fontDois.addEventListener('click', () => {
    fontUm.classList.remove('active');
    fontDois.classList.add('active');
    fontTres.classList.remove('active');
    fonte = 'font2'

})
fontTres.addEventListener('click', () => {
    fontUm.classList.remove('active');
    fontDois.classList.remove('active');
    fontTres.classList.add('active');
    fonte = 'font3'
     
})
inputRoxo = document.querySelector('#roxo-label');
inputRosa = document.querySelector('#rosa-label');
inputGreen = document.querySelector('#green-label');

inputRoxo.addEventListener('click', e => {
    
    inputRoxo.classList.add('check');
    inputGreen.classList.remove('check');
    inputRosa.classList.remove('check');
    
})
inputGreen.addEventListener('click', e => {
 
    inputRoxo.classList.remove('check');
    inputGreen.classList.add('check');
    inputRosa.classList.remove('check');
})
inputRosa.addEventListener('click', e => {

    inputRoxo.classList.remove('check');
    inputGreen.classList.remove('check');
    inputRosa.classList.add('check');
})



