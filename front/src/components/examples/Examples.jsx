import { useState, useEffect } from "react";
import TabButton from "../TabButton/TabButton";
import FormularioMovimiento from "../Forms/movimientos"


export default function Examples({ onLogout }) {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Selecciona un tipo de movimiento</p>;

  if (selectedTopic) {
    tabContent = <FormularioMovimiento selectedTopic={selectedTopic} />;
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Opciones</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "Deposito"}
          onSelect={() => handleSelect("Deposito")}
        >
          Deposito
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Retiro"}
          onSelect={() => handleSelect("Retiro")}
        >
          Retiro
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Transferencia"}
          onSelect={() => handleSelect("Transferencia")}
        >
          Transferencia
        </TabButton>
      </menu>
      {tabContent}
      <div class="logout-container">
        <button class="logout-button" onClick={onLogout}>
          Salir
        </button>
      </div>
    </section>
  );
}
