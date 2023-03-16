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
      { id: 1, foto: "./assets/previa/foto01.jpg" },
      { id: 2, foto: "./assets/previa/foto02.jpg" },
      { id: 3, foto: "./assets/previa/foto03.jpg" },
      { id: 4, foto: "./assets/previa/foto04.jpg" },
      { id: 5, foto: "./assets/previa/foto05.jpg" },
      { id: 6, foto: "./assets/previa/foto06.jpg" },
      { id: 7, foto: "./assets/previa/foto07.jpg" },
      { id: 8, foto: "./assets/previa/foto08.jpg" },
      { id: 9, foto: "./assets/previa/foto09.jpg" },
      { id: 10, foto: "./assets/previa/foto10.jpg" },
      { id: 11, foto: "./assets/previa/foto11.jpg" },
      { id: 12, foto: "./assets/previa/foto12.jpg" },
      { id: 13, foto: "./assets/previa/foto13.jpg" },
      { id: 14, foto: "./assets/previa/foto14.jpg" },
      { id: 15, foto: "./assets/previa/foto15.jpg" },
      { id: 16, foto: "./assets/previa/foto16.jpg" },
      { id: 17, foto: "./assets/previa/foto17.jpg" },
      { id: 18, foto: "./assets/previa/foto18.jpg" },
      { id: 19, foto: "./assets/previa/foto19.jpg" },
      { id: 20, foto: "./assets/previa/foto20.jpg" },
      { id: 21, foto: "./assets/previa/foto21.jpg" },
      { id: 22, foto: "./assets/previa/foto22.jpg" },
      { id: 23, foto: "./assets/previa/foto23.jpg" },
      { id: 24, foto: "./assets/previa/foto24.jpg" },
    ],
    posEvento: [
      { id: 1, foto: "./assets/cumple/03_JOA_cumple4.jpg" },
      { id: 2, foto: "./assets/cumple/08_JOA_cumple4.jpg" },
      { id: 3, foto: "./assets/cumple/09_JOA_cumple4.jpg" },
      { id: 4, foto: "./assets/cumple/13_JOA_cumple4.jpg" },
      { id: 5, foto: "./assets/cumple/14_JOA_cumple4.jpg" },
      { id: 6, foto: "./assets/cumple/16_JOA_cumple4.jpg" },
      { id: 7, foto: "./assets/cumple/18_JOA_cumple4.jpg" },
      { id: 8, foto: "./assets/cumple/19_JOA_cumple4.jpg" },
      { id: 9, foto: "./assets/cumple/26_JOA_cumple4.jpg" },
      { id: 10, foto: "./assets/cumple/27_JOA_cumple4.jpg" },
      { id: 11, foto: "./assets/cumple/29_JOA_cumple4.jpg" },
      { id: 12, foto: "./assets/cumple/31_JOA_cumple4.jpg" },
      { id: 13, foto: "./assets/cumple/32_JOA_cumple4.jpg" },
      { id: 14, foto: "./assets/cumple/34_JOA_cumple4.jpg" },
      { id: 15, foto: "./assets/cumple/35_JOA_cumple4.jpg" },
      { id: 16, foto: "./assets/cumple/36_JOA_cumple4.jpg" },
      { id: 17, foto: "./assets/cumple/37_JOA_cumple4.jpg" },
      { id: 18, foto: "./assets/cumple/38_JOA_cumple4.jpg" },
      { id: 19, foto: "./assets/cumple/40_JOA_cumple4.jpg" },
      { id: 20, foto: "./assets/cumple/45_JOA_cumple4.jpg" },
      { id: 21, foto: "./assets/cumple/47_JOA_cumple4.jpg" },
      { id: 22, foto: "./assets/cumple/49_JOA_cumple4.jpg" },
      { id: 23, foto: "./assets/cumple/51_JOA_cumple4.jpg" },
      { id: 24, foto: "./assets/cumple/52_JOA_cumple4.jpg" },
      { id: 25, foto: "./assets/cumple/53_JOA_cumple4.jpg" },
      { id: 26, foto: "./assets/cumple/54_JOA_cumple4.jpg" },
      { id: 27, foto: "./assets/cumple/55_JOA_cumple4.jpg" },
      { id: 28, foto: "./assets/cumple/56_JOA_cumple4.jpg" },
      { id: 29, foto: "./assets/cumple/57_JOA_cumple4.jpg" },
      { id: 30, foto: "./assets/cumple/58_JOA_cumple4.jpg" },
      { id: 31, foto: "./assets/cumple/59_JOA_cumple4.jpg" },
      { id: 32, foto: "./assets/cumple/60_JOA_cumple4.jpg" },
      { id: 33, foto: "./assets/cumple/61_JOA_cumple4.jpg" },
      { id: 34, foto: "./assets/cumple/64_JOA_cumple4.jpg" },
      { id: 35, foto: "./assets/cumple/69_JOA_cumple4.jpg" },
      { id: 36, foto: "./assets/cumple/70_JOA_cumple4.jpg" },
      { id: 37, foto: "./assets/cumple/72_JOA_cumple4.jpg" },
      { id: 38, foto: "./assets/cumple/73_JOA_cumple4.jpg" },
      { id: 39, foto: "./assets/cumple/74_JOA_cumple4.jpg" },
      { id: 40, foto: "./assets/cumple/75_JOA_cumple4.jpg" },
      { id: 41, foto: "./assets/cumple/76_JOA_cumple4.jpg" },
      { id: 42, foto: "./assets/cumple/77_JOA_cumple4.jpg" },
      { id: 43, foto: "./assets/cumple/78_JOA_cumple4.jpg" },
      { id: 44, foto: "./assets/cumple/79_JOA_cumple4.jpg" },
      { id: 45, foto: "./assets/cumple/81_JOA_cumple4.jpg" },
      { id: 46, foto: "./assets/cumple/84_JOA_cumple4.jpg" },
      { id: 47, foto: "./assets/cumple/85_JOA_cumple4.jpg" },
      { id: 48, foto: "./assets/cumple/86_JOA_cumple4.jpg" },
      { id: 49, foto: "./assets/cumple/87_JOA_cumple4.jpg" },
      { id: 50, foto: "./assets/cumple/88_JOA_cumple4.jpg" },
    ],
    souvenir: [
      { id: 1, foto: "./assets/souvenir/1souvenir.jpg" },
      { id: 2, foto: "./assets/souvenir/2souvenir.jpg" },
      { id: 3, foto: "./assets/souvenir/3souvenir.jpg" },
      { id: 4, foto: "./assets/souvenir/4souvenir.jpg" },
      { id: 5, foto: "./assets/souvenir/5souvenir.jpg" },
      { id: 6, foto: "./assets/souvenir/6souvenir.jpg" },
      { id: 7, foto: "./assets/souvenir/7souvenir.jpg" },
      { id: 8, foto: "./assets/souvenir/8souvenir.jpg" },
    ],
    fotosEvento: true,
  };

  return { limitDate, dataCumple };
};
