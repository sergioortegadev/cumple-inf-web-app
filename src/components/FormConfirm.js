import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  invitados: "",
  _template: "table", // Para cambiar el template de respuesta, ver formsubmit.co/email-templates
};
const validationsForm = (form) => {
  // Esta función se pasará al hook useForm para que se hagan las validaciones dentro de la función handleBlur, y dentro de la función setErrors.
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexTextArea = /^.{1,255}$/;

  if (!form.name.trim()) {
    //el método .trim() quita los espacios en blanco para chequear que no venga vacío.
    errors.name = `Tu nombre es necesario`;
  } else if (!regexName.test(form.name.trim())) {
    errors.name = `Este espacio solo acepta letras`;
  }
  if (!form.invitados.trim()) {
    errors.invitados = `Por favor, no olvides decirnos con quienes venís`;
  } else if (!regexTextArea.test(form.invitados.trim())) {
    errors.invitados = `Este espacio está limitado a 255 caracteres`;
  }
  return errors;

  // validaciones por si hubiera otros campos (email, asunto, etc)
  /* 
  if (!form.email.trim()) {
    errors.email = "El campo 'email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El email ingresado no es válido";
  }
  if (!form.subject.trim()) {
    errors.subject = "El campo 'asunto' es requerido";
  }
 */
};

const FormConfirm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="highlight">
      <br />
      <h2>Confirmación y mensajes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && (
          <div className="form-error">
            <p>{errors.name}</p>
          </div>
        )}
        <textarea
          name="invitados"
          cols="50"
          rows="6"
          placeholder="Escribe el nombre de los que vienen contigo. Esta info nos sirve para calcular la cantidad de gente. Gracias... 😉"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.invitados}
          required
        />
        {errors.invitados && (
          <div className="form-error">
            <p>{errors.invitados}</p>
          </div>
        )}
        <input type="submit" value="Enviar" />
      </form>
      <br />
      {loading && <Loader />}
      {response && (
        <Message msg="El mensaje se envió. Gracias... 😉" bgColor="#198754" />
      )}
    </div>
  );
};

export default FormConfirm;
