const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

let tempoDecorrido = 0;
let timerInterval = null;

criaTimer('rosa',0);

function criaTimer(cor, tempo) {

  const app = document.querySelector('#app');

  app.innerHTML = `
                    <div class="base-timer container">
                        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <g class="base-timer__circle">
                                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                                <path
                                        id="base-timer-path-remaining"
                                        stroke-dasharray="283"
                                        class="base-timer__path-remaining ${cor}"
                                        d="
                                        M 50, 50
                                        m -45, 0
                                        a 45,45 0 1,0 90,0
                                        a 45,45 0 1,0 -90,0
                                        "
                                    ></path>
                            </g>
                        </svg>
                        <div class="timer">
                            <span class="timer__time" id="timer">${formatTime(tempo)}</span>
                            <button  class="timer__pause" id="start-pause" data-funcao='start'>start</button>
                        </div>
                    </div>
`
}
function addEventControle(){
  buttonStartPause = document.querySelector('#start-pause');
  buttonStartPause.addEventListener('click',controles);
}


function controles(){
  
  if (buttonStartPause.dataset.funcao === 'start') {
    startTimer(tempoTotal);
    buttonStartPause.dataset.funcao = 'pause';
    buttonStartPause.textContent = 'pause';
  } else if (buttonStartPause.dataset.funcao === 'pause') {
    pauseTimer();
    buttonStartPause.dataset.funcao = 'start';
    buttonStartPause.textContent = 'start';
  } else if (buttonStartPause.dataset.funcao === 'restart') {
    document.querySelector("#timer").textContent = formatTime(tempoTotal);
    startTimer(tempoTotal);
  }
  
}

function pauseTimer() {
  onTimesUp();
}

//inicia e faz a contagem
function startTimer(tempoTotal) {

  timerInterval = setInterval(() => {
    tempoDecorrido += 1;
    tempoRestante = tempoTotal - tempoDecorrido;
    document.querySelector("#timer").innerHTML = formatTime(tempoRestante);
    setCircleDasharray(tempoRestante, tempoTotal);
    if (tempoRestante === 0) {
      tempoRestante = tempoTotal;
      tempoDecorrido = 0;
      buttonStartPause.textContent = 'restart';
      buttonStartPause.dataset.funcao = 'restart';
      onTimesUp();
      document.querySelector('#audio').play();
    }
  }, 1000);
}
//transforma o tempo em  minutos e segundos
function formatTime(tempoRestante) {
  const minutes = Math.floor(tempoRestante / 60);
  let seconds = tempoRestante % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
//vai redesenhando o circulo, inicia em 283
function setCircleDasharray(tempoRestante, tempoTotal) {
  const setCircleDasharray = `${(calculateTimeFraction(tempoRestante, tempoTotal) * FULL_DASH_ARRAY).toFixed(0)} 283`
  document.getElementById('base-timer-path-remaining').setAttribute('stroke-dasharray', setCircleDasharray);
}

//calcula a fração de tempo, para ir decrementando e chegar a 0 ter terminado de percorrer tudo
function calculateTimeFraction(tempoRestante, tempoTotal) {
  const rawTimeFraction = tempoRestante / tempoTotal;
  return rawTimeFraction - (1 / tempoTotal) * (1 - rawTimeFraction);
}

function onTimesUp() {
  clearInterval(timerInterval);
}