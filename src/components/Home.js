import { HashLink } from "react-router-hash-link";
import Countdown from "../Countdown";
import { useModal } from "../hooks/useModal";
import "./Modal.css";
import { FigureModal } from "./FigureModal";
import { useState, useEffect } from "react";
import FormConfirm from "./FormConfirm";
import { DataCliente } from "./DataCliente";
import { DataSalon } from "./DataSalon";

export default function Home() {
  // Ingresar datos del cliente y fecha límite del contDown en DataCliente.js
  const { limitDate, dataCumple } = DataCliente();

  // Ingresar datos del salón en DataSalon.js
  const { salon } = DataSalon();

  //  -  Menu y UpButton -
  const handleMenu = () => {
    //  switcheamos la clase "is-active" de esta forma: buscamos el selector "panel" y luego entra a su lista de clases y con el método toggle añade o quita la clase "is-active"
    document.querySelector(".panel").classList.toggle("is-active");
    document.querySelector(".hamburguer-btn").classList.toggle("is-active");
  };
  const handleLinkMenu = () => {
    // con este tercer parámetro quitamos el "is-active" cuando se selecciona algún link del menú, cerrándolo.
    document.querySelector(".panel").classList.remove("is-active");
    document.querySelector(".hamburguer-btn").classList.remove("is-active");
  };

  // UpButton: Para que el botón aparezca cuando hacemos scroll para abajo, y desaparezca cuando suba. Usamos las propiedades: "pageYOffset" del objeto Window, || o la propiedad "documentElement.scrollTop" del Document, para detectar a qué distancia se ha hecho scroll vertical, y luego determinar que cuando sea mayor de 400 haga aparecer (quita el hidden) al botón. Con else volvemos a ocultarlo.
  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 450) {
      document.querySelector(".scroll-top-boton").classList.remove("hidden");
    } else {
      document.querySelector(".scroll-top-boton").classList.add("hidden");
    }
    //podríamos ver la actividad del scroll con console.log(window.pageYOffset, document.documentElement.scrollTop)
  });

  /* Apertura y Cierre Fotos - Modales */
  const [isOpenModal, openModal, closeModal] = useModal(false);

  // Esta var de estado envía la ubicacion de la foto como props al componente FigureModal que se abre como una ventana modal
  const [data, setData] = useState({});

  // Galerias de fotos - Slides
  const [foto, setFoto] = useState(1);

  function openOneModalSalon() {
    setFoto(1);
    salon.images.forEach((el) => {
      if (el.id === foto) {
        setData({
          galery: "salon",
          foto: el.foto,
        });
      }
    });
    openModal();
  }

  const btnPhotoNext = () => {
    if (data.galery === "salon" && foto < salon.images.length)
      setFoto(foto + 1);
    if (data.galery === "cumple" && foto < dataCumple.images.length)
      setFoto(foto + 1);
  };
  const btnPhotoPrev = () => {
    if (foto !== 1) setFoto(foto - 1);
  };

  useEffect(() => {
    if (data.galery === "salon") {
      salon.images.forEach((el) => {
        if (el.id === foto) {
          setData({
            galery: "salon",
            foto: el.foto,
          });
        }
      });
    } else {
      dataCumple.images.forEach((el) => {
        if (el.id === foto) {
          setData({
            galery: "cumple",
            foto: el.foto,
          });
        }
      });
    }
  }, [foto]);

  function openOneModal(id) {
    setData({});
    setFoto(id);
    dataCumple.images.map((el) => {
      if (id === el.id) {
        setData({
          galery: "cumple",
          id: el.id,
          foto: el.foto,
        });
      }
    });
    openModal();
  }

  return (
    <>
      {/* Menu Desplegado */}
      <aside className="panel">
        <nav className="menu">
          <HashLink onClick={handleLinkMenu} smooth to="#cuando">
            ¿Cuándo se festeja?
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#salon">
            ¿Dónde se festeja?
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#fotos">
            Mirá estas fotos!
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#formConfirm">
            Confirmá tu participación!
          </HashLink>
        </nav>
      </aside>

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
            <h3>¿Cuándo es?</h3>
            <h2>
              {dataCumple.fecha}
              <br />
              {dataCumple.horario}
            </h2>
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
                onClick={(e) => openOneModalSalon()}
                className="salon-frente"
                src={salon.imageFront}
                alt="foto fachada salón"
              />
            </div>
            <h4>{salon.direccion}</h4>
            {/* - - Redes Sociales Salón - - */}
            <p>Podés contactar al salón por:</p>
            <h5>
              Teléfono: <a href={"tel:" + salon.telefono}>{salon.telefono}</a>
            </h5>
            <div className="redes-salon">
              {salon.whatsapp && (
                <a
                  href={
                    window.navigator.platform === "Win32"
                      ? `https://wa.me/54${salon.whatsapp}?text=Mensaje%20desde:%20INVITACION%20VIRTUAL%20INTELIGENTE®%0AHola%20les%20consulto%20por%20el%20salón%20${salon.name}.%0AIndicar%20fecha%20y%20cuántos%20años%20cumple :-)`
                      : `https://wa.me/54${salon.whatsapp}?text=Mensaje%20desde:%20INVITACION%20VIRTUAL%20INTELIGENTE®%0AHola%20les%20consulto%20por%20el%20salón%20${salon.name}%20 😄Indicar%20fecha%20y%20cuántos%20años%20🎊%20cumple:%20`
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="bi bi-whatsapp"
                    style={{
                      color: "rgb(18, 175, 10)",
                    }}
                  ></i>
                </a>
              )}
              {salon.instagram && (
                <a href={salon.instagram} target="_blank" rel="noreferrer">
                  <i
                    className="bi bi-instagram"
                    style={{
                      color: "rgb(188, 42, 141)",
                    }}
                  ></i>
                </a>
              )}
              {salon.facebook && (
                <a href={salon.facebook} target="_blank" rel="noreferrer">
                  <i
                    className="bi bi-facebook"
                    style={{
                      color: "rgb(59,89,151)",
                    }}
                  ></i>
                </a>
              )}
              {salon.tiktok && (
                <a href={salon.tiktok} target="_blank" rel="noreferrer">
                  <i
                    className="bi bi-tiktok"
                    style={{
                      color: "#000",
                    }}
                  ></i>
                </a>
              )}
              {salon.youtube && (
                <a href={salon.youtube} target="_blank" rel="noreferrer">
                  <i
                    className="bi bi-youtube"
                    style={{
                      color: "#f00",
                    }}
                  ></i>
                </a>
              )}
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
          </div>
        </article>

        <article id="joa4banner" className="hero-image">
          <img src="./assets/joa4.png" alt="logo joaquin 4" />
        </article>

        {/*  - - Fotos cumpleañero/a - -  */}
        <article id="fotos" className="content">
          <div className="grid-insta">
            {dataCumple.images.map((el) => (
              <img
                onClick={(e) => openOneModal(el.id)}
                src={el.foto}
                key={el.id}
                alt="foto"
              />
            ))}
          </div>
        </article>

        {/*  Modals para la apertura de las fotos del cliente y del salon */}
        {isOpenModal && (
          <FigureModal
            key={data.id}
            foto={data.foto}
            isOpenModal={isOpenModal}
            closeModal={closeModal}
            btnPhotoNext={btnPhotoNext}
            btnPhotoPrev={btnPhotoPrev}
          />
        )}

        <article id="formConfirm" className="content">
          <FormConfirm />
        </article>
      </main>

      {/* Botón Up */}
      <button className="scroll-top-boton btn btn-dark hidden">
        <HashLink smooth to="#top">
          <div>
            <i className="bi bi-arrow-up-circle-fill"></i>
          </div>
        </HashLink>
      </button>

      {/* Hamburguer Menu */}
      <button
        onClick={handleMenu}
        className="hamburguer-btn hamburger hamburger--spring"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
}
