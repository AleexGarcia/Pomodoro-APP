let links = document.querySelectorAll('.nav__link');

links.forEach(link => {

    link.addEventListener('click', e => {
        e.target.classList.add('active', recebeCor());
        if (e.target.dataset.link === 'pomodoro') {

            criaTimer(recebeCor(), recebeTempos().pomodoro);
            addEventControle();
            tempoTotal = recebeTempos().pomodoro;
            tempoDecorrido = 0;
            tempoRestante = tempoTotal;
            links[1].classList.remove(recebeCor(), 'active')
            links[2].classList.remove(recebeCor(), 'active')

        } else if (e.target.dataset.link === 'shortBreak') {

            criaTimer(recebeCor(), recebeTempos().shortBreak);
            addEventControle();
            tempoTotal = recebeTempos().shortBreak;
            tempoDecorrido = 0;
            tempoRestante = tempoTotal;
            links[0].classList.remove(recebeCor(), 'active')
            links[2].classList.remove(recebeCor(), 'active')

        } else if (e.target.dataset.link === 'longBreak') {
            criaTimer(recebeCor(), recebeTempos().longBreak);
            addEventControle();
            tempoTotal = recebeTempos().longBreak;
            tempoDecorrido = 0;
            tempoRestante = tempoTotal;
            links[0].classList.remove(recebeCor(), 'active')
            links[1].classList.remove(recebeCor(), 'active')
        }

    })
});