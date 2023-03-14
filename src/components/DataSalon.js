export const DataSalon = () => {
  // Datos Salón:
  const salon = {
    name: "Arlekin",
    whatsapp: 3515127986,
    /* Las redes sociales que no tenga o no quiera que aparezcan dejarlas en "undefined" */
    instagram: "https://www.instagram.com/arlekinfiestasinfantiles",
    facebook:
      "https://www.facebook.com/Arlekin-Fiestas-Infantiles-1423939864491867/",
    tiktok: undefined,
    youtube: undefined,
    imageFront: "./assets/arlekin2.jpg",
    images: [
      { id: 1, foto: "./assets/salon/salon1.jpeg" },
      { id: 2, foto: "./assets/salon/salon2.jpeg" },
      { id: 3, foto: "./assets/salon/salon3.jpeg" },
      { id: 4, foto: "./assets/salon/salon4.jpeg" },
      { id: 5, foto: "./assets/salon/salon5.jpeg" },
      { id: 6, foto: "./assets/salon/salon6.jpeg" },
      { id: 7, foto: "./assets/salon/salon7.jpeg" },
      { id: 8, foto: "./assets/salon/salon8.jpeg" },
      { id: 9, foto: "./assets/salon/salon9.jpeg" },
      { id: 10, foto: "./assets/salon/salon10.jpeg" },
      { id: 11, foto: "./assets/salon/salon11.jpeg" },
      { id: 12, foto: "./assets/salon/salon12.jpeg" },
      { id: 13, foto: "./assets/salon/salon13.jpeg" },
      { id: 14, foto: "./assets/salon/salon14.jpeg" },
    ],
    direccion: "Av. Sagrada Familia 1328",
    telefono: 3515127986,
  };
  return { salon };
};
