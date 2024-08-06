import styles from "./App.module.css";
import { useState } from "react";
import PDF from "./PDF/PDF.jsx";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

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
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value.toUpperCase() });
  };

  return (
    <div className={styles.formContainer}>
      <h4 className={styles.formTitle}>Formulario</h4>
      <form className={styles.form} autoComplete="off">
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          name="name"
          value={form.name}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="nationality">Nacionalidad</label>
        <input
          type="text"
          name="nationality"
          value={form.nationality}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="clientID">Número de Documento de Identificación</label>
        <input
          type="text"
          name="clientID"
          value={form.clientID}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="idType">Tipo de Documento de Identificación</label>
        <input
          type="text"
          name="idType"
          value={form.idType}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="domain">Dominio del sitio</label>
        <input
          type="text"
          name="domain"
          value={form.domain}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="deliveryTerm">Plazo de Entrega (Días/Meses)</label>
        <input
          type="text"
          name="deliveryTerm"
          value={form.deliveryTerm}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="amount">
          Monto Completo (Expresado en dólares, Numero y letra)
        </label>
        <input
          type="text"
          name="amount"
          value={form.amount}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="reviews">Número de revisiones</label>
        <input
          type="number"
          name="reviews"
          value={form.reviews}
          className={styles.input}
          onChange={changeHandler}
          min={1}
        />
        <label htmlFor="yearText">Año Expresado en letras</label>
        <input
          type="text"
          name="yearText"
          value={form.yearText}
          className={styles.input}
          onChange={changeHandler}
        />
        <label htmlFor="payments">
          Indicar el número de pagos, el monto de los mismos, las fechas de
          entrega, de quererse así, el lugar y la forma de los pagos
        </label>
        <textarea
          name="payments"
          className={styles.input}
          value={form.payments}
          onChange={changeHandler}
        ></textarea>
        <label htmlFor="reviewsDetail">
          Determina las fechas y/o condiciones de acuerdo a la cantidad de
          reviciones acordada
        </label>
        <textarea
          name="reviewsDetail"
          className={styles.input}
          value={form.reviewsDetail}
          onChange={changeHandler}
        ></textarea>
      </form>
      <PDFDownloadLink document={<PDF client={form} />} fileName="Contrato.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            <button className={styles.download}>Cargando...</button>
          ) : (
            <button className={styles.download}>Descargar Contrato</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
