import { ReactDOM } from "react";
import { createPortal } from "react-dom";

const Borrar = () => {
  return (
    <>
      <h3>
        La siguiente línea es contenido creado en Borrar.js con
        ReactDom.createPortal
      </h3>
      ;
      {createPortal(
        <h2>Contenido con portal</h2>,
        document.getElementById("countdown")
      )}
    </>
  );
};
export default Borrar();
