import styles from "./App.module.css";
import { useState } from "react";
import PDF from "./PDF/PDF.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const [form, setForm] = useState({
    name: "",
    nationality: "",
    clientID: "",
    idType: "",
    domain: "",
    deliveryTerm: "",
    amount: "",
    reviews: 1,
    reviewsDetail: "",
    payments: "",
    yearText: "VEINTE VEINTICUATRO",
    pages: [],
    sectionsAndFunctions: [],
    backendAndAdministration: [],
    additional: [],
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    name === "pages" ||
    "sectionsAndFunctions" ||
    "backendAndAdministration" ||
    "additional"
      ? setForm({ ...form, [name]: value.split("|") })
      : setForm({ ...form, [name]: value });
    console.log(form);
  };
  return (
    <div>
      <form autoComplete="off">
        <h4 className={styles.formTitle}>Datos del Cliente</h4>
        <div className={styles.formField}>
          <label htmlFor="name">
            Nombre Completo
            <input
              type="text"
              name="name"
              value={form.name}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="nationality">
            Nacionalidad
            <input
              type="text"
              name="nationality"
              value={form.nationality}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="clientID">
            Número de Documento de Identificación
            <input
              type="text"
              name="clientID"
              value={form.clientID}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="idType">
            Tipo de Documento de Identificación
            <input
              type="text"
              name="idType"
              value={form.idType}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
        </div>
        <h4 className={styles.formTitle}>Datos del Proyecto</h4>
        <div className={styles.formField}>
          <label htmlFor="domain">
            Dominio del sitio
            <input
              type="text"
              name="domain"
              value={form.domain}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="deliveryTerm">
            Plazo de Entrega (Días/Meses)
            <input
              type="text"
              name="deliveryTerm"
              value={form.deliveryTerm}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="amount">
            Monto Completo (Expresado en dólares, Numero y letra)
            <input
              type="text"
              name="amount"
              value={form.amount}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="reviews">
            Número de revisiones
            <input
              type="number"
              name="reviews"
              value={form.reviews}
              className={styles.input}
              onChange={changeHandler}
              min={1}
            />
          </label>
          <label htmlFor="yearText">
            Año Expresado en letras
            <input
              type="text"
              name="yearText"
              value={form.yearText}
              className={styles.input}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className={`${styles.formField} ${styles.formFieldLarge}`}>
          <label htmlFor="payments">
            Indicar el número de pagos, el monto de los mismos, las fechas de
            entrega, de quererse así, el lugar y la forma de los pagos
            <textarea
              name="payments"
              className={styles.input}
              value={form.payments}
              onChange={changeHandler}
            ></textarea>
          </label>
          <label htmlFor="reviewsDetail">
            Determina las fechas y/o condiciones de acuerdo a la cantidad de
            reviciones acordada
            <textarea
              name="reviewsDetail"
              className={styles.input}
              value={form.reviewsDetail}
              onChange={changeHandler}
            ></textarea>
          </label>
          <label htmlFor="pages">
            Determina las páginas del sitio web (separadas por comas), cada una
            debe contar con descripción y contenido
            <textarea
              name="pages"
              className={styles.input}
              value={form.pages}
              onChange={changeHandler}
              placeholder="Por ejemplo: Página de Inicio: [Descripción breve de la página de inicio] Contenido: [Detalles del contenido, imágenes, videos, etc.]"
            ></textarea>
          </label>
          <label htmlFor="sectionsAndFunctions">
            Determina las secciones y funciones del sitio web (separadas por
            "|"), cada una debe contar con descripción y contenido
            <textarea
              name="sectionsAndFunctions"
              className={styles.input}
              value={form.sectionsAndFunctions}
              onChange={changeHandler}
              placeholder="Por ejemplo: Formulario de Contacto: [Descripción del formulario de contacto] Campos:
          [Listado de campos del formulario, validaciones, etc.],
          Galería de Imágenes: [Descripción de la galería de imágenes] Funcionalidades: [Detalles sobre la administración de imágenes, tipos de visualización, etc.]"
            ></textarea>
          </label>
          <label htmlFor="backendAndAdministration">
            Determina si hay Backend o integraciones externas y la
            administración del sitio web (separadas por "|"), cada una debe
            contar con descripción y contenido
            <textarea
              name="backendAndAdministration"
              className={styles.input}
              value={form.backendAndAdministration}
              onChange={changeHandler}
              placeholder="Por ejemplo: Acceso de Administración: [Descripción de las áreas
          de administración] Funcionalidades: [Detalles sobre la gestión de
          usuarios, contenido, reportes, etc.]"
            ></textarea>
          </label>
          <label htmlFor="additional">
            Consideraciones adicionales como seguridad, Pruebas y Control,
            Compatibilidad con Navegadores o si el sitio web es Resposivo
            (separadas por "|"), cada una debe contar con una descripción
            <textarea
              name="additional"
              className={styles.input}
              value={form.additional}
              onChange={changeHandler}
            ></textarea>
          </label>
        </div>
      </form>
      <PDFDownloadLink document={<PDF client={form} />} fileName="Contrato.pdf">
        {({ blob, url, loading, error }) => (
          <button className={styles.download}>
            {loading ? "Cargando..." : "Descargar Contrato"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
