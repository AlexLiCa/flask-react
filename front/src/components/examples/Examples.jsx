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
          isSelected={selectedTopic === "Paquetes"}
          onSelect={() => handleSelect("Paquetes")}
        >
          Paquetes
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Agregar"}
          onSelect={() => handleSelect("Agregar")}
        >
          Agregar
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Rastrear"}
          onSelect={() => handleSelect("Rastrear")}
        >
          Rastrear
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "Actualizar"}
          onSelect={() => handleSelect("Actualizar")}
        >
          Actualizar
        </TabButton>
      </menu>
      {tabContent}
      <div className="logout-container">
        <button className="logout-button" onClick={onLogout}>
          Salir
        </button>
      </div>
    </section>
  );
}
