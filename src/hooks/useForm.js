import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    // Este manejador permite modificar la var de estado con la info del input del formulario.
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value, // Si no hiciéramos la destruccturación, esta línea sería [e.target.name]: e.target.value
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form)); // Hace las verificaciones. Ejecuta la función que viene del formulario (validateForm) dentro de la función que actualiza la var de estado de errores. Verificando cada input del formulario, por eso recibe como parámetro "form"
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      //En el if verifico que no haya errores: si la longitud de las llaves del objeto "errors" es cero.
      // alert("enviando");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/instintoimagen@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }) // Endpoint y objeto con opciones que recibe la petición.
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
