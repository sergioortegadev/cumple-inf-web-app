import { useState } from "react";

const Countdown = ({ limitDate, name, fotosEvento }) => {
  /* limitDate llega como objeto, desde el componente padre donde se setea: fecha y hora, el nombre para el mensaje y si contrató fotos en el evento que vayan en este web app */
  let countdownDate = new Date(limitDate).getTime();
  let initCount = false;
  const [count, setCount] = useState(initCount);

  let countdownTempo = setInterval(() => {
    let ahora = new Date().getTime(),
      remainingTime = countdownDate - ahora,
      dias = Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
      horas = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutos = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
      segundos = Math.floor((remainingTime % (1000 * 60)) / 1000);

    setCount(
      `Faltan  ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 
      para festejar el cumple de ${name}`
    );
    if (dias === 0 && horas < 10) {
      setCount(
        `ES HOY! Faltan ${horas} horas, ${minutos} minutos y ${segundos} segundos para festejar el cumple de ${name}`
      );
    }
    /* Si el tiempo se cumplió pero el evento dura 2h y 30minutos (9.000.000 milisegundos) y está dentro de ese tiempo: pone mensaje "ya empezó", sino que "ya finalizó" */
    if (remainingTime < 0) {
      if (countdownDate + 9000000 > ahora) {
        clearInterval(countdownTempo);
        setCount(
          `El cumple ya empezó! apurate que todavía te queda tiempo para festejar!!!`
        );
      } else {
        clearInterval(countdownTempo);
        if (fotosEvento) {
          setCount(
            `El cumple ya finalizó. Gracias por venir!!! En unos días se publicarán aquí las fotos del evento.`
          );
        } else {
          setCount(`El cumple ya finalizó. Gracias por venir!!!`);
        }
      }
    }
  }, 1000);

  return (
    <div id="countdown" className="countdown">
      <h3>{count}</h3>
    </div>
  );
};

export default Countdown;
