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


let timePomodoro = document.getElementById('pomodoro-time');
let timeShortBreak = document.getElementById('short-break');
let timeLongBreak = document.getElementById('long-break');

function recebeTempos() {


    tempos = {
        pomodoro: timePomodoro.value * 60,
        shortBreak: timeShortBreak.value * 60,
        longBreak: timeLongBreak.value * 60
    }
    return tempos;
}




function recebeCor() {
    let inputsDeCor = document.querySelectorAll('[data-input="cor"]');
    inputsDeCor.forEach(input => {
        if (input.checked) {
            cor = input.value;
        }
    })

    return cor;
}
function recebeFonte() {
    let inputsDeFonte = document.querySelectorAll('[data-input="fonte"]');
    inputsDeFonte.forEach(input => {
        if (input.checked) {
            fonte = input.value;
        }
    })

    return fonte;
}
function mudaTimer(tempos, cor) {
    criaTimer(cor, tempos.pomodoro);
}
function mudaFonte(fonteEscolhida) {
    let html = document.querySelector('html')
    html.classList.replace(html.classList[0], fonteEscolhida);

}

function mudaCor(cor) {

    let linksNav = document.querySelectorAll('.nav__link');
    linksNav.forEach(link => {
        link.classList.forEach(classe => {
            if (classe === 'active') {
                link.classList.replace(link.classList[2], cor);
            }
        })
    })


}



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


fontUm = document.querySelector('#font-label');
fontDois = document.querySelector('#font2-label');
fontTres = document.querySelector('#font3-label');

fontUm.addEventListener('click', () => {
    fontUm.classList.add('active');
    fontDois.classList.remove('active');
    fontTres.classList.remove('active');

})
fontDois.addEventListener('click', () => {
    fontUm.classList.remove('active');
    fontDois.classList.add('active');
    fontTres.classList.remove('active');

})
fontTres.addEventListener('click', () => {
    fontUm.classList.remove('active');
    fontDois.classList.remove('active');
    fontTres.classList.add('active');

})

aply = document.querySelector("#aply");

aply.addEventListener('click', e => {
    if (
        timePomodoro.validity.valid &&
        timeShortBreak.validity.valid &&
        timeLongBreak.validity.valid
    ) {
        e.preventDefault();
        mudaCor(recebeCor());
        mudaFonte(recebeFonte());
        mudaTimer(recebeTempos(), recebeCor());
        tempoTotal = recebeTempos().pomodoro;
        tempoDecorrido = 0;
        tempoRestante = tempoTotal;
        settings.classList.add('oculto');
        addEventControle();
        let links = document.querySelectorAll('.nav__link');
        links[0].classList.add('active', recebeCor());
        links[1].classList.remove('active', recebeCor());
        links[2].classList.remove('active', recebeCor());
    }

})




