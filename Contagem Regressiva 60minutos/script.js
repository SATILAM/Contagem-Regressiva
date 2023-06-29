// Define o tempo inicial em minutos
let minutes = 60;
let seconds = 0;

// Converte o tempo total para segundos
let totalSeconds = minutes * 60 + seconds;

// Função para atualizar a contagem regressiva
function updateCountdown() {
  // Calcula os minutos e segundos restantes
  let minutesLeft = Math.floor(totalSeconds / 60);
  let secondsLeft = totalSeconds % 60;

  // Formata os minutos e segundos com dois dígitos
  let formattedMinutes = String(minutesLeft).padStart(2, "0");
  let formattedSeconds = String(secondsLeft).padStart(2, "0");

  // Exibe a contagem regressiva no console
  console.log(`${formattedMinutes}:${formattedSeconds}`);

  // Verifica se a contagem regressiva chegou a zero
  if (totalSeconds === 0) {
    clearInterval(countdownInterval);
    // Fazer algo quando a contagem regressiva terminar
    console.log("Contagem regressiva encerrada!");
  } else {
    // Decrementa um segundo
    totalSeconds--;
  }
}

// Atualiza a contagem regressiva a cada segundo
let countdownInterval = setInterval(updateCountdown, 1000);