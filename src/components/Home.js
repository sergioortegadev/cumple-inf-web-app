// import { HashLink } from "react-router-hash-link";
import Countdown from "../Countdown";
import { useModal } from "../hooks/useModal";
import "./Modal.css";
import { FigureModal } from "./FigureModal";
import { useState } from "react";

export default function Home() {
  const dataCumple = {
    name: "Joaquín",
    añosCumple: 4,
    fecha: "El domingo 12 de marzo",
    horario: "de 19 a 21:30",
    invitacion: "./assets/hero.jpg",
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

  // Aquí poner la fecha y hora a calcular
  const limitDate = "Mar 12, 2023 19:00:00";

  // Datos Salón:
  const salon = {
    name: "Arlekin",
    imageFront: "./assets/arlekin2.jpg",
    images: [],
    direccion: "Av. Sagrada Familia 1328",
  };

  /* Apertura y Cierre Fotos - Modales */
  const [isOpenModal, openModal, closeModal] = useModal(false);

  // Esta var de estado envía la ubicacion de la foto como props al componente FigureModal que se abre como una ventana modal
  const [data, setData] = useState({});

  function openOneModal(id) {
    setData({});
    dataCumple.images.map((el) => {
      if (id === el.id) {
        setData({
          id: el.id,
          foto: el.foto,
        });
      }
    });
    openModal();
  }
  return (
    <>
      {/*  // Contenido principal  */}
      <main className="container-fluid">
        <div className="hero-image">
          <img src={dataCumple.invitacion} alt="invitacion" />
          {/*  // Si usamos la Hero Image en el background de un elemento
          <h3>
            Subtitulo dos líneas - linea uno
            <br /> Subtitulo de dos líneas para HeroImage
          </h3>
          <div>
            <h1>Título Principal Hero Image</h1>
          </div> */}
        </div>
        <article id="inicio" className="nombre-cumple">
          <h2>
            Festejamos el cumple {dataCumple.añosCumple} de {dataCumple.name}
          </h2>
        </article>
        <article id="cuando" className="content">
          <div className="highlight">
            <h2>¿Cuándo es?</h2>
            <h3>
              {dataCumple.fecha}
              <br />
              {dataCumple.horario}
            </h3>
          </div>

          <Countdown
            limitDate={limitDate}
            name={dataCumple.name}
            fotosEvento={dataCumple.fotosEvento}
          />
        </article>
        <article id="salon" className="content">
          <div className="highlight">
            <h2>¿Dónde festejamos?</h2>
            <h3>En el salón {salon.name}</h3>
            <div className="imagenes-salon">
              <img
                className="salon-frente"
                src={salon.imageFront}
                alt="foto fachada salón"
              />
              <h4>{salon.direccion}</h4>
            </div>
          </div>
          <iframe
            title="Ubicacion Salon en gmaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.9945390790076!2d-64.22904348464644!3d-31.386714101958383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298dba6407d2f%3A0x17633a4330ac8eab!2sArlek%C3%ADn%20Fiestas%20Infantiles!5e0!3m2!1ses!2sar!4v1677618379217!5m2!1ses!2sar"
            style={{
              width: "100%",
              height: "30vh",
              maxHeight: "40vh",
              style: "border:0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>

        <article id="fotos" className="content">
          <div className="grid-insta">
            <img
              onClick={(e) => openOneModal(1)}
              src={dataCumple.images[0].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(2)}
              src={dataCumple.images[1].foto}
              alt="foto"
            />

            <img
              onClick={(e) => openOneModal(3)}
              src={dataCumple.images[2].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(4)}
              src={dataCumple.images[3].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(5)}
              src={dataCumple.images[4].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(6)}
              src={dataCumple.images[5].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(7)}
              src={dataCumple.images[6].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(8)}
              src={dataCumple.images[7].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(9)}
              src={dataCumple.images[8].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(10)}
              src={dataCumple.images[9].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(11)}
              src={dataCumple.images[10].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(12)}
              src={dataCumple.images[11].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(13)}
              src={dataCumple.images[12].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(14)}
              src={dataCumple.images[13].foto}
              alt="foto"
            />
            <img
              onClick={(e) => openOneModal(15)}
              src={dataCumple.images[14].foto}
              alt="foto"
            />
          </div>
        </article>

        {/*  Modals para la apertura de las fotos  */}
        {isOpenModal && (
          <FigureModal
            key={data.id}
            foto={data.foto}
            isOpenModal={isOpenModal}
            closeModal={closeModal}
          />
        )}

        <article id="formConfirm" className="content">
          <div className="highlight">
            <br />
            <br />
            <br />
            <br />
            <h3>Formulario CONFIRMACION</h3>
            Proximamente
            <br />
            <br />
            <br />
            <br />
          </div>
        </article>

        {/* <HashLink to="#1">
          <button type="button" className="btn btn-success">
          Titulo 1
          </button>
          </HashLink>
          <HashLink to="#2">
          <button type="button" className="btn btn-success">
          Titulo 2
          </button>
         </HashLink> */}
      </main>
    </>
  );
}
