export default function countdown(id, limitDate, finalMessage) {
  const $countdown = document.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let ahora = new Date().getTime(),
      tiempoLimite = countdownDate - ahora,
      dias = Math.floor(tiempoLimite / (1000 * 60 * 60 * 24)),
      horas = Math.floor(
        (tiempoLimite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutos = Math.floor((tiempoLimite % (1000 * 60 * 60)) / (1000 * 60)),
      segundos = Math.floor((tiempoLimite % (1000 * 60)) / 1000);

    $countdown.InnerHTML = `<h3>Faltan  ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos  para festejar el cumple de Joaquín</h3>`;

    if (tiempoLimite < 0) {
      clearInterval(countdownTempo);
      $countdown.InnerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
