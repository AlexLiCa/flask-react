import React, { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import "./movimientos.css";

const FormularioMovimiento = ({ selectedTopic }) => {
  const [resultado, setResultado] = useState(""); // Estado para almacenar y mostrar el resultado



  // Actualiza este objeto para reflejar las rutas y acciones correctas
  const LINKS = {
    Paquetes: "http://127.0.0.1:8000/paquetes",
    Agregar: "http://127.0.0.1:8000/paquetes",
    // Nota: Las siguientes URLs son base, se debe agregar el ID del paquete dinámicamente
    Rastrear: "http://127.0.0.1:8000/paquetes/",
    Actualizar: "http://127.0.0.1:8000/paquetes/",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    let url = LINKS[selectedTopic];

    // Si se requiere ID para Rastrear y Actualizar y el método es GET, añadir al URL
    if (["Rastrear", "Actualizar"].includes(selectedTopic) && data.id) {
      url += data.id; // Asume que se añade el ID al final de la URL.
    }

    let fetchOptions = {
      method:
        selectedTopic === "Agregar"
          ? "POST"
          : selectedTopic === "Actualizar"
          ? "PUT"
          : "GET",
      headers: {},
    };

    // Añadir cabeceras y cuerpo solo si el método no es GET
    if (fetchOptions.method !== "GET") {
      fetchOptions.headers["Content-Type"] = "application/json";
      fetchOptions.body = JSON.stringify(data);
    }

    console.log(selectedTopic);
    console.log(url);
    console.log(fetchOptions.method)
    try {
      const response = await fetch(url, fetchOptions);
      const result = await response.json();
      setResultado(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setResultado("Error al realizar la solicitud.");
    }
  };


  const renderForm = () => {
    switch (selectedTopic) {
      case "Paquetes":
        return (
          <form onSubmit={handleSubmit}>
            <button type="submit">Mostrar Paquetes</button>
          </form>
        );
      case "Agregar":
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="dir">Direccion:</label>
            <input type="text" id="direccion" name="direccion" required />

            <label htmlFor="dest">Destinatario:</label>
            <input type="text" id="destinatario" name="destinatario" required />

            <label htmlFor="est">Estado:</label>
            <input type="text" id="estado" name="estado" required />

            <button type="submit">Agregar Paquete</button>
          </form>
        );
      case "Rastrear":
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="idP">Id del Paquete:</label>
            <input type="number" id="id" name="id" required />

            <button type="submit">Buscar paquete</button>
          </form>
        );
      case "Actualizar":
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="idP">Id del Paquete:</label>
            <input type="number" id="id" name="id" required />

            <label htmlFor="dir">Direccion:</label>
            <input type="text" id="direccion" name="direccion" required />

            <label htmlFor="dest">Destinatario:</label>
            <input type="text" id="destinatario" name="destinatario" required />

            <label htmlFor="est">Estado:</label>
            <input type="text" id="estado" name="estado" required />

            <button type="submit">Actualizar datos</button>
          </form>
        );
      default:
        return <p>Formulario no disponible</p>;
    }
  };

  return (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic]?.title || "Seleccione un movimiento"}</h3>
      <p>
        {EXAMPLES[selectedTopic]?.description ||
          "Seleccione un tipo de movimiento para ver los detalles y realizar operaciones."}
      </p>
      {selectedTopic && renderForm()}
      <pre>{resultado}</pre>
    </div>
  );
};

export default FormularioMovimiento;
