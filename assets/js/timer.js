const FULL_DASH_ARRAY = 283; 
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
  };

 const TIME_LIMIT = 120;


 let timePassed = 0;
 let timeLeft = TIME_LIMIT;
 let timerInterval = null;
 let remainingPathColor = COLOR_CODES.info.color;

const app = document.querySelector('#app');

app.innerHTML = `
                    <div class="base-timer container">
                        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <g class="base-timer__circle">
                                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                                <path
                                        id="base-timer-path-remaining"
                                        stroke-dasharray="283"
                                        class="base-timer__path-remaining ${remainingPathColor}"
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
                            <span class="timer__time" id="timer">${formatTime(timeLeft)}</span>
                            <button class="timer__pause">pause</button>
                        </div>
                    </div>
`
startTimer();

function onTimesUp() {
    clearInterval(timerInterval);
  }
//inicia e faz a contagem
function startTimer() {
    timerInterval = setInterval(() => {
        timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.querySelector("#timer").innerHTML = formatTime(timeLeft);
        setCircleDasharray();
        setRemainingPathColor(timeLeft);
        if (timeLeft === 0) {
            onTimesUp();
          }
    }, 1000);
}
//transforma o tempo em  minutos e segundos
function formatTime(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
//calcula fração do tempo
function calculateTimeFraction(){
    return timeLeft / TIME_LIMIT;
}
//vai redesenhando o circulo, inicia em 283
function setCircleDasharray(){
    const setCircleDasharray = `${(calculateTimeFraction()*FULL_DASH_ARRAY).toFixed(0)} 283`
    document.getElementById('base-timer-path-remaining').setAttribute('stroke-dasharray', setCircleDasharray);
}

//calcula a fração de tempo, para ir decrementando e chegar a 0 ter terminado de percorrer tudo
function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  //mudanças de cores
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
  
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
  
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }