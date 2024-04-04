import React, { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import "./movimientos.css";

const FormularioMovimiento = ({ selectedTopic }) => {

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target); 
    const data = Object.fromEntries(formData.entries());

    const LINKS = {
      Deposito: "http://127.0.0.1:5000/deposito",
      Retiro: "http://127.0.0.1:5000/retiro",
      Transferencia: "http://127.0.0.1:5000/transferencia",
    };
    
    let url = LINKS[selectedTopic];

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });

      const responseBody = await response.json();

      if (response.ok) {
        alert(responseBody.message);

      } else {
        alert(responseBody.message);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
      alert(responseBody.message);
    }
    e.target.reset();
  };



  const renderForm = () => {
    switch (selectedTopic) {
      case "Deposito":
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="cuenta">Número de cuenta:</label>
            <input type="text" id="no_cuenta" name="no_cuenta" required />

            <label htmlFor="monto">Monto:</label>
            <input type="number" id="monto" name="monto" required />

            <button type="submit">Realizar Depósito</button>
          </form>
        );
      case "Retiro":
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="cuenta">Número de cuenta:</label>
            <input type="text" id="no_cuenta" name="no_cuenta" required />

            <label htmlFor="nip">NIP:</label>
            <input type="password" id="nip" name="nip" required />

            <label htmlFor="monto">Monto:</label>
            <input type="number" id="monto" name="monto" required />

            <button type="submit">Realizar Retiro</button>
          </form>
        );
      case "Transferencia":
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="cuentaOrigen">Cuenta Origen:</label>
            <input type="text" id="no_origen" name="no_origen" required />

            <label htmlFor="cuentaDestino">Cuenta Destino:</label>
            <input type="text" id="no_destino" name="no_destino" required/>

            <label htmlFor="monto">Monto:</label>
            <input type="number" id="monto" name="monto" required />

            <button type="submit">Realizar Transferencia</button>
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
    </div>
  );
};

export default FormularioMovimiento;
