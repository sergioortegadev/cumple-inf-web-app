export const DataCliente = () => {
  // Aquí poner la fecha y hora a calcular, en formato "YYYY/MM/DD HH:MM:SS".
  const limitDate = "2023/03/12 19:00:00";

  // Datos Cumpleañera/o y flia

  const dataCumple = {
    name: "Joaquín",
    whatsapp: 3515222418,
    /* el número de whatsapp colocar solo si la familia quiere incluir un btn para mensajes por whatsapp. Sino dejar "undefined" */
    añosCumple: 4,
    fecha: "El domingo 12 de marzo",
    horario: "de 19 a 21:30",
    invitacion: "./assets/hero.jpg",
    /* Para las imagenes previas recomendamos que ya estén optimizadas: peso aprox 100KB, formato cuadrado 1:1 de 900px de lado */
    images: [
      { id: 1, foto: "./assets/foto01.jpg" },
      { id: 2, foto: "./assets/foto02.jpg" },
      { id: 3, foto: "./assets/foto03.jpg" },
      { id: 4, foto: "./assets/foto04.jpg" },
      { id: 5, foto: "./assets/foto05.jpg" },
      { id: 6, foto: "./assets/foto06.jpg" },
      { id: 7, foto: "./assets/foto07.jpg" },
      { id: 8, foto: "./assets/foto08.jpg" },
      { id: 9, foto: "./assets/foto09.jpg" },
      { id: 10, foto: "./assets/foto10.jpg" },
      { id: 11, foto: "./assets/foto11.jpg" },
      { id: 12, foto: "./assets/foto12.jpg" },
      { id: 13, foto: "./assets/foto13.jpg" },
      { id: 14, foto: "./assets/foto14.jpg" },
      { id: 15, foto: "./assets/foto15.jpg" },
    ],
    fotosEvento: true,
  };

  return { limitDate, dataCumple };
};
